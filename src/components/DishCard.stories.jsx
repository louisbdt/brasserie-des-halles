import DishCard from './DishCard'

const baseDish = {
  id: 'burrata',
  name: 'Burrata, tomates anciennes, pesto maison',
  category: 'starter',
  price: 11,
  diets: ['vegetarian', 'gluten-free'],
  description: 'Burrata crémeuse, tomates de saison, pesto basilic frais.',
  photo: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=600&q=80',
}

export default {
  title: 'Composants/DishCard',
  component: DishCard,
  args: { onViewDetail: () => {} },
}

export const Default = {
  args: { dish: baseDish },
}

export const NoDiets = {
  args: { dish: { ...baseDish, diets: [] } },
}

export const LongContent = {
  args: {
    dish: {
      ...baseDish,
      name: 'Burrata crémeuse affinée, tomates anciennes du maraîcher, pesto basilic maison et copeaux de parmesan 24 mois',
      description:
        "Une burrata affinée 48h, servie avec un assortiment de tomates anciennes de saison cultivées par un maraîcher local, un pesto basilic préparé maison le jour même, et des copeaux de parmesan affiné 24 mois, le tout arrosé d'une huile d'olive de première pression à froid.",
      diets: ['vegetarian', 'gluten-free', 'vegan'],
    },
  },
}
