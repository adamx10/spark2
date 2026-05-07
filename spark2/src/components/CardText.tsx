function CardText() {
  return (
    <div  className="flex  justify-center    ,,                    ">
    <div className="max-w-sm rounded-3xl bg-white p-6 shadow-lg">

     
      <div className="flex items-center gap-30">
        
        <h2 className="rounded-3xl bg-purple-700 px-4 py-1 text-xl font-bold text-white">
          Creatif
        </h2>

        <img
          src="book.png"
          className="w-25"
        />

      </div>

      <p className="mt-4 text-gray-900">
        Créer une courte histoire pour raconter quelque chose de grand.
      </p>

    </div>
    </div>
  );
}

export default CardText;