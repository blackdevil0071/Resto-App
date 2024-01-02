import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Roti',
    description: 'Fine punjabi Dish',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Dosa',
    description: 'A Crispy South indian Meal',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Burger',
    description: 'American, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Tandoori',
    description: 'Indian Chicken Fried recipee..',
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
