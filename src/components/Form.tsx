import { useState } from "react";
import { categories } from "../data/categories";
import { Activity } from "../types";

/**
 * Componente de formulario para agregar actividades.
 */
export default function Form() {
  const [activity, setActivity] = useState<Activity>({
    category: 1,
    name: "",
    calories: 0,
  });

  /**
   * Maneja el evento de cambio para el elemento de entrada o selección.
   *
   * @param e - El objeto de evento de cambio.
   */
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

  /**
   * Verifica si la actividad es válida.
   *
   * @returns true si la actividad es válida, de lo contrario false.
   */
  const isValidActivity = () => {
    const { name, calories } = activity;
    return name.trim() !== "" && calories > 0;
  };

  /**
   * Maneja el envío del formulario.
   *
   * @param e - El evento de formulario.
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(activity);
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
