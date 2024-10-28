export default function Item({name,quantity,category}){
    return(
        <div className="bg-slate-900 m-2 p-1">
            <h2 className="text-2xl text-white font-bold">{name}</h2>
            <p className="text-white"> Buy {quantity} in {category}</p>
        </div>
    );
}1