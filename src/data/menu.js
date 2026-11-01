import pasta1Image from '@/assets/images/menu/main-menu/pasta.png'
import steakImage from '@/assets/images/menu/main-menu/stake.png'
import pizza1Image from '@/assets/images/menu/pizza/pizza-1.png'
import pizza2Image from '@/assets/images/menu/pizza/pizza-2.png'
import salad1Image from '@/assets/images/menu/salate/image.png'
import salad2Image from '@/assets/images/menu/salate/salate-2.png'

export const menuCategories = [
    { id: 'all', title: 'All' },
    { id: 'salads', title: 'Salads' },
    { id: 'pizza', title: 'Pizza' },
    { id: 'main', title: 'Main Courses' },
]

export const menuItems = [
    {
        id: 'truffle-pasta',
        category: 'main',
        title: 'Tagliatelle ai Funghi',
        description: 'Fresh tagliatelle with tender chicken, wild mushrooms, parmesan and a delicate cream sauce.',
        price: 26,
        image: pasta1Image,
        featured: true,
    },
    {
        id: 'ribeye-steak',
        category: 'main',
        title: 'Ribeye Steak',
        description: 'Grilled ribeye steak with roasted potatoes, asparagus, garlic and fresh thyme.',
        price: 38,
        image: steakImage,
        featured: true,
    },
    {
        id: 'pizza-pepperoni',
        category: 'pizza',
        title: 'Pizza Diavola',
        description: 'Wood-fired pizza with spicy salami, San Marzano tomato sauce, mozzarella and fresh basil.',
        price: 22,
        image: pizza1Image,
        featured: true,
    },
    {
        id: 'pizza-prosciutto',
        category: 'pizza',
        title: 'Pizza Prosciutto e Rucola',
        description: 'Traditional Italian pizza with prosciutto crudo, fresh arugula, mozzarella and parmesan.',
        price: 24,
        image: pizza2Image,
        featured: false,
    },
    {
        id: 'caesar-salad',
        category: 'salads',
        title: 'Caesar Salad',
        description: 'Crisp romaine lettuce, grilled chicken, parmesan, golden croutons and classic Caesar dressing.',
        price: 18,
        image: salad1Image,
        featured: true,
    },
    {
        id: 'beetroot-salad',
        category: 'salads',
        title: 'Roasted Beetroot Salad',
        description: 'Roasted beetroot with fresh arugula, creamy goat cheese, toasted walnuts and balsamic dressing.',
        price: 19,
        image: salad2Image,
        featured: false,
    },
]