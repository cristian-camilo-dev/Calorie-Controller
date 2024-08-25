import { categories } from "../data/categories";

export default function Form() {
  return (
    <div>
      <form className="space-y-5 bg-white shadow p-10 rounded-lg">
        <div className="grid grid-cols-1 gap-3">
          <label htmlFor="category" className="font-bold">
            Categorías:
          </label>
          <select
            name=""
            id="category"
            className="border border-slate-300 p-2 rounded-lg w-full bg-white"
          >
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 gap-3">
          <label htmlFor="activity" className="font-bold">
            Actividad:
          </label>
          <input
            type="text"
            id="activity"
            className="border border-slate-300 p-2 rounded-lg w-full"
            placeholder="Ej. comida, cena, desayuno, pesas, correr, etc."
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
          />
        </div>

        <button className="w-full bg-gray-800 border-2 border-[#3e3e3e] rounded-lg text-white px-6 py-3 text-base hover:border-lime-400 cursor-pointer transition uppercase font-bold">
          Guardar comida o ejercicio
        </button>
      </form>
    </div>
  );
}
