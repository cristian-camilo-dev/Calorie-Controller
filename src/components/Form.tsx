import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { categories } from "../data/categories";
import { Activity } from "../types";
import { ActivityActions } from "../reducers/activityReducer";

type FormProps = {
  dispatch: React.Dispatch<ActivityActions>;
};

const initialState: Activity = {
  id: uuidv4(),
  category: 1,
  name: "",
  calories: 0,
};

export default function Form({ dispatch }: FormProps) {
  const [activity, setActivity] = useState<Activity>(initialState);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const isNumberField = ["category", "calories"].includes(e.target.id);
    const { value, id } = e.target;
    setActivity({
      ...activity,
      [id]: isNumberField ? Number(value) : value,
    });
  };

  const isValidActivity = () => {
    const { name, calories } = activity;
    return name.trim() !== "" && calories > 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({ type: "save-activity", payload: { newActivity: activity } });
    setActivity({
      ...initialState,
      id: uuidv4(),
    });
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="space-y-5 bg-white shadow p-10 rounded-lg"
      >
        <div className="grid grid-cols-1 gap-3">
          <label htmlFor="category" className="font-bold">
            Categorías:
          </label>
          <select
            value={activity.category}
            id="category"
            className="border border-slate-300 p-2 rounded-lg w-full bg-white"
            onChange={handleChange}
            autoComplete="off"
          >
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 gap-3">
          <label htmlFor="name" className="font-bold">
            Actividad:
          </label>
          <input
            type="text"
            id="name"
            className="border border-slate-300 p-2 rounded-lg w-full"
            placeholder="Ej. comida, cena, desayuno, pesas, correr, etc."
            value={activity.name}
            onChange={handleChange}
            autoComplete="off"
          />
        </div>

        <div className="grid grid-cols-1 gap-3">
          <label htmlFor="calories" className="font-bold">
            Calorías:
          </label>
          <input
            type="number"
            id="calories"
            className="border border-slate-300 p-2 rounded-lg w-full"
            placeholder="Calorías Ej. 200, 300, 500, etc."
            value={activity.calories}
            onChange={handleChange}
            autoComplete="off"
          />
        </div>

        <button
          className="w-full bg-gray-800 border-2 border-[#3e3e3e] rounded-lg text-white px-6 py-3 text-base hover:border-lime-400 cursor-pointer transition uppercase font-bold disabled:opacity-50"
          disabled={!isValidActivity()}
        >
          {activity.category === 1
            ? "Agregar Comida 🍔"
            : "Agregar Ejercicio 🚵‍♂️"}
        </button>
      </form>
    </div>
  );
}
