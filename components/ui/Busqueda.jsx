import React from "react";

const Busqueda = ({hanbleBuscar,handleChange,busqueda}) => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <form onSubmit={hanbleBuscar}>
            <input
              className="form-control form-control-lg"
              type="search"
              placeholder="Buscar..."
              aria-label="Buscar..."
              name="busqueda"
              value={busqueda}
              onChange={handleChange}
            />
            <button className="btn btn-primary search-btn" type="submit">
              Buscar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Busqueda;
