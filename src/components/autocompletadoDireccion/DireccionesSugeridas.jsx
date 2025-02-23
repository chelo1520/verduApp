export const DireccionesSugeridas = ({direcciones}) => {
  return (
    <div>
        
        <ul className="list-group mt-2">
                    {      
                    direcciones.map((sugerencia, index) => (
                        <li key={index} className="list-group-item">
                            {sugerencia.place_name}
                        </li>
                    ))}
                </ul>
            
    </div>
  )
}
