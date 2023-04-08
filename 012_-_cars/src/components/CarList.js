import { useDispatch, useSelector } from "react-redux";
import { deleteCar } from "../store";
function CarList() {
  const dispatch = useDispatch();

  // const cars = useSelector((state) => {
  //   return state.cars.carsList;
  // });
  const { cars, name } = useSelector(
    ({ form, cars: { carsList, searchTerm } }) => {
      const filteredCars = carsList.filter((car) =>
        car.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      return {
        cars: filteredCars,
        name: form.name,
      };
    }
  );

  const handleDelete = (car) => {
    dispatch(deleteCar(car.id));
  };

  const renderedCars = cars.map((car) => {
    //Decide if this car should be bold
    //state.form.name
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase());
    return (
      <div className={`panel ${bold && "bold"}`} key={car.id}>
        <p>
          {car.name} - $ {car.cost}
        </p>
        <button className="button is-danger" onClick={() => handleDelete(car)}>
          {" "}
          Delete
        </button>
      </div>
    );
  });

  return (
    <div className="car-list">
      {renderedCars}
      <hr />
    </div>
  );
}

export default CarList;
