export interface MenuItem {
    id: number;
    name: string;
    description: string;
    price: number;
    calories: number;
    image: string;
    category: string;
}

export interface Review {
    id: number;
    authorName: string;
    rating: 1 | 2 | 3 | 4 | 5;  
    text: string;
    date: string;
    avatarUrl: string;
    
}

export interface ContactFormData{
    name: string;
    email: string;
    phone: string;
    message: string;
    formState: {
        errors: string;
        isSubmitting: string
    };
}

export interface Benefit {
    id: number;
    title: string;
    description: string;
    icon: string;
    order: number;
}

export interface NavigationItem {
    name: string;
    href: string;
    icon?: string;
    isExternal?: boolean;
}