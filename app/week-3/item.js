export default function Item({name,quantity,category}){
    return(
        
            <div className="bg-slate-800 m-3 p-1">
                <h2 className="text-xl text-white font-bold">{name}</h2>
                <p className="text-white"> Buy {quantity} in {category}</p>
            </div>
    );
}