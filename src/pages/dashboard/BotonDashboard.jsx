import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const BotonDashboard = () => {

    const navigate = useNavigate()

  return (
    <button className="btn btn-primary" onClick={() => navigate("/dashboard") }>
        Menu de carga
    </button>
  )
}
