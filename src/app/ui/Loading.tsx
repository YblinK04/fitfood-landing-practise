export default function Loading() {

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br
        from-green-400 to blue-500">
           <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full
            animate-spin"></div>
             <p className="">Загружаем самое вкусное...</p>
           </div>
        </div>        
    );
};