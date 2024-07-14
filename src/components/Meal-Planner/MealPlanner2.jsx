import React, { useState, useReducer } from 'react';
import { jsPDF } from "jspdf";
import autoTable from 'jspdf-autotable';
import Swal from 'sweetalert2';

const initialState = {
  mealPlan: [],
  days: ''
};

const generating = () => {
    let timerInterval;
      Swal.fire({
        title: "PiFAM is preparing your meal plan.",
        imageUrl: '/src/assets/recipe.gif',
        imageWidth: 100,
        imageHeight: 100,
        html: "This window will close once the meal plan is ready.",
        timer: 35000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
          const timer = Swal.getPopup().querySelector("b");
          timerInterval = setInterval(() => {
            timer.textContent = `${Swal.getTimerLeft()}`;
          }, 100);
        },
        willClose: () => {
          clearInterval(timerInterval);
        }
      }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log("I was closed by the timer");
        }
      });
  }

function reducer(state, action) {
  switch (action.type) {
    case 'setMealPlan':
      return { ...state, mealPlan: action.payload };
    case 'setDays':
      return { ...state, days: action.payload };
    default:
      throw new Error();
  }
}

const MealPlanner2 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isGenerating, setIsGenerating] = useState(false);

  const generateMealPlan = async () => {
    setIsGenerating(true);
    const API_URL = "https://api.openai.com/v1/chat/completions";
    const API_KEY = ""
    const headers = {
       "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`
    }

    const data = {
        model: "gpt-4o",
        messages: [
            {
                role: "user",
                content: `${state.days} days`
            },
            {
                role: "system",
                content: "You're PiFAM. Your main task is to create Filipino meal plans based on the days user has requested. You can only create meal plans for maximum of 30 days. The data you will provide is array of objects. You will only provide meal plan in these format: day, breakfast, lunch, meryenda, dinner and meal name. Make a linebreak per day. Strictly don't add any details other than the meal plan. Strictly include the day number only and not the word 'day'."
            }
        ]
    }

    const response = await fetch(API_URL, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(data)
    })

    const result = await response.json()
    const mealPlanData = result.choices[0].message.content

    if (typeof mealPlanData === 'string') {
      try {
        const mealPlanArray = JSON.parse(mealPlanData);
        if (Array.isArray(mealPlanArray)) {
          dispatch({ type: 'setMealPlan', payload: mealPlanArray });
        } else {
          alert('Failed to generate meal plan, the server is busy. Please try again.');
        }
      } catch (error) {
        console.error('Failed to parse mealPlanData', error);
        alert('Failed to generate meal plan, the server is busy. Please try again.');
      }
    } else {
      console.error('mealPlanData is not a string');
      alert('Failed to generate meal plan the server is busy. Please try again.');
    }
    setIsGenerating(false);
  }

  const clearValues = () => {
    dispatch({ type: 'setDays', payload: '' });
    dispatch({ type: 'setMealPlan', payload: [] });
    setIsGenerating(false);
  }

  const exportPDF = () => {
    const unit = "pt";
    const size = "A4"; 
    const orientation = "portrait";
  
    const doc = new jsPDF(orientation, unit, size);
  
    doc.setFontSize(15);
  
    const title = `Meal Plan for ${state.days} days`;
    const headers = [["Day", "Breakfast", "Lunch", "Meryenda", "Dinner"]];
  
    const data = state.mealPlan.map(meal => [meal.day, meal.breakfast, meal.lunch, meal.meryenda, meal.dinner]);
  
    let content = {
      startY: 70,
      head: headers,
      body: data
    };
  
    doc.text(title, 70, 30);
    doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 70, 45);
    doc.text(`From PiFAM Website: wwww.pifam.com.ph`, 70, 60);
    autoTable(doc, content);  
    doc.save(`mealplan-${new Date().toLocaleDateString()}.pdf`)
  }

  return (

  <div className="flex min-h-screen justify-center overscroll-contain bg-warm_beige">
    <div className="col-span-12 mt-40 pb-20">
      <div className="overflow-auto lg:overflow-visible ">
              <div className="flex justify-between mb-4 gap-2">
                  <div className='flex gap-2'>
                      <select id="full-name" name="full-name" className="w-[200px] bg-white rounded border-3 border-rhubarb_red  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={state.days} onChange={e => dispatch({ type: 'setDays', payload: e.target.value })} required>
                          <option value="">Select nos of days</option>
                          <option value="7">7 days</option>
                          <option value="14">14 days</option>
                          <option value="21">21 days</option>
                          <option value="30">30 days</option>
                      </select>
                      <button onClick={generateMealPlan} className="text-white bg-rhubarb_red border-0 py-2 px-8 focus:outline-none hover:bg-red-400 rounded text-lg" disabled={!state.days}>Get Meal Plan</button>
                  </div>
              </div>

              {state.mealPlan.length > 0 && (
                  <div className='flex gap-2 mb-3 '>
                      <button onClick={exportPDF} className="text-white bg-rhubarb_red border-0 py-2 px-8 focus:outline-none hover:bg-red-400 rounded text-lg" disabled={state.mealPlan.length === 0}>Download PDF</button>
                      <button onClick={clearValues} className="text-white bg-rhubarb_red border-0 py-2 px-8 focus:outline-none hover:bg-red-400 rounded text-lg">Clear</button>
                  </div>
                  )}
              
              {isGenerating && 
                  generating()
                  }

              <table className="min-w-full border-collapse block md:table">
                      <thead className="block md:table-header-group">
                          <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
                              <th className="bg-pine_green p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Day</th>
                              <th className="bg-pine_green p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Breakfast</th>
                              <th className="bg-pine_green p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Lunch</th>
                              <th className="bg-pine_green p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Meryenda</th>
                              <th className="bg-pine_green p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Dinner</th>
                          </tr>
                      </thead>
                      <tbody className="block md:table-row-group">
                      {state.mealPlan.map((meal, index) => (
                          <tr key={index} className="bg-gray-100 bg-opacity-50 border border-grey-500 md:border-none block md:table-row">
                              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Day</span>{meal.day}</td>
                              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Breakfast</span>{meal.breakfast}</td>
                              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Lunch</span>{meal.lunch}</td>
                              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Meryenda</span>{meal.meryenda}</td>
                              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Dinner</span>{meal.dinner}</td>
                          </tr>
                      ))}
                      </tbody>
              </table>
      </div>
    </div>
  </div>
  );
};

export default MealPlanner2;