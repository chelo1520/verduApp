
export const SeleccionKilos = ({setKilos, kilos}) => {

  return (
    <select value={kilos} onChange={(e) => {setKilos(Number(e.target.value))}}>
        <option value={1}>kg</option>
        <option value={0.5}>½ kg</option>
        <option value={0.25}>¼ kg</option>
    </select>       
  )
}
