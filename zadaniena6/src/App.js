import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const roles = ['Aktor', 'Reżyser', 'Operator', 'Inni'];

export default function CrewManager() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    role: '',
    experience: '',
    description: ''
  });
  const [crew, setCrew] = useState([]);
  const [filter, setFilter] = useState('Wszyscy');
  const [sortAsc, setSortAsc] = useState("none");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    if (!form.firstName || !form.lastName || !form.role) return;
    const date = new Date();
    const pad = n => n.toString().padStart(2, '0');
    const now = `${date.getFullYear()}-${pad(date.getMonth()+1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
    setCrew([
      ...crew,
      { ...form, addedDate: now, modifiedDate: null, isChecked: false, isEdited: false, isModified: false }
    ]);
    setForm({
      firstName: '',
      lastName: '',
      role: '',
      experience: '',
      description: ''
    });
  };

  const filteredCrew = crew.filter(
      p => {
        if (filter === 'Wszyscy')
        {
          return true
        } else if ( filter === 'Inni') {
          return !roles.includes(p.role);
        } else {
            return p.role === filter;
        }
      }
  );

  const sortedCrew = [...filteredCrew].sort((a, b) => {
    if (sortAsc === "none") {
      if (!a.addedDate) return 1;
      if (!b.addedDate) return -1;
      return a.addedDate.localeCompare(b.addedDate);
    }
    const expA = Number(a.experience) || 0;
    const expB = Number(b.experience) || 0;
    return sortAsc === "asc" ? expA - expB : expB - expA;
  });

  const handleReset = () => {
    setCrew([]);
    setForm({
      firstName: '',
      lastName: '',
      role: '',
      experience: '',
      description: ''
    });
    setFilter('Wszyscy');
    setSortAsc("none");
  };

    const handleDeleteSelected = () => {
        setCrew(crew.filter(person => !person.isChecked));
    }

    const [editForm, setEditForm] = useState({
        firstName: '',
        lastName: '',
        role: '',
        experience: '',
        description: ''
    })

    const handleEdit = (p) => {
        setCrew(crew.map(person => person === p ? { ...person, isEdited: !person.isEdited } : person));
        setEditForm({
            firstName: p.firstName,
            lastName: p.lastName,
            role: p.role,
            experience: p.experience,
            description: p.description
        })
    }



  return (
      <div className="App">
        <h2>Dodaj osobę</h2>
        <div className="mb-3 row">
          <div className="col">
            <input
                className="form-control"
                name="firstName"
                placeholder="Imię"
                value={form.firstName}
                onChange={handleChange}
            />
          </div>
          <div className="col">
            <input
                className="form-control"
                name="lastName"
                placeholder="Nazwisko"
                value={form.lastName}
                onChange={handleChange}
            />
          </div>
          <div className="col">
            <input
                className="form-control"
                name="role"
                placeholder="Rola"
                value={form.role}
                onChange={handleChange}
                list="roles"
            />
            <datalist id="roles">
              {roles.map(r => <option key={r} value={r} />)}
            </datalist>
          </div>
          <div className="col">
            <input
                className="form-control"
                name="experience"
                type="number"
                placeholder="Doświadczenie"
                value={form.experience}
                onChange={handleChange}
            />
          </div>
        </div>
        <textarea
            className="form-control mb-2"
            name="description"
            placeholder="Opis"
            value={form.description}
            onChange={handleChange}
        />
        <button className="btn btn-secondary mb-4 px-5" onClick={handleAdd}>Dodaj</button>

        <h3>Pracownicy</h3>
        <div className="mb-3 btn-group">
          {['Wszyscy', ...roles].map(r => (
              <button
                  key={r}
                  className={`btn btn-outline-primary ${filter === r ? 'active' : ''}`}
                  onClick={() => setFilter(r)}
              >
                {r}
              </button>
          ))}
        </div>

        <h4>Sortuj</h4>
        <div className="d-flex align-items-center mb-3">
            <div className="btn-group">
              <span className="me-2">Doświadczenie:</span>
              <button
                  className={`btn btn-outline-primary btn-sm ${sortAsc === "asc"? 'active' : ''}`}
                  onClick={() => setSortAsc("asc")}
              >↑</button>
              <button
                  className={`btn btn-outline-primary btn-sm ${sortAsc === "desc" ? 'active' : ''}`}
                  onClick={() => setSortAsc("desc")}
              >↓</button>
              <button
                  className={`btn btn-outline-secondary btn-sm ${sortAsc === "none" ? 'active' : ''}`}
                  onClick={() => setSortAsc("none")}
              >×</button>
            </div>
        </div>

        <h4>Lista ekipy</h4>
        {sortedCrew.length === 0 ? (
            <p>Brak osób</p>
        ) : (
            <table className="table table-striped">
                <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col">Imię</th>
                    <th scope="col">Nazwisko</th>
                    <th scope="col">Rola</th>
                    <th scope="col">Doświadczenie</th>
                    <th scope="col">Opis</th>
                    <th scope="col">Data</th>
                    <th scope="col">Akcje</th>
                </tr>
                </thead>
                <tbody>
              {sortedCrew.map((p) => (
                  p.isEdited === false ? (
                      <tr>
                          <td>
                              <input type="checkbox" checked={p.isChecked} onChange={() => {
                                  setCrew(crew.map(person =>
                                      person === p ? { ...person, isChecked: !person.isChecked } : person
                                  ));
                              }} />
                          </td>
                          <td>{p.firstName}</td>
                          <td>{p.lastName}</td>
                          <td>{p.role}</td>
                          <td>{p.experience || 'Brak'}</td>
                          <td>{p.description || 'Brak opisu'}</td>
                          {p.isModified ? (
                              <td style={{color: 'red'}}>
                                  Dodano: {p.addedDate}<br />
                                  <b>Zmieniono: {p.modifiedDate}</b>
                              </td>
                          ) : (
                              <td>{p.addedDate}</td>
                          )}


                          <td>
                              <div>
                                  <button className="btn btn-sm btn-secondary me-1" onClick={() => {handleEdit(p)}}>Edytuj</button>
                              </div>
                          </td>
                      </tr>
                  ) : (

                      <tr>
                            <td>
                                <input type="checkbox" checked={p.isChecked} onChange={() => {
                                    setCrew(crew.map(person =>
                                        person === p ? { ...person, isChecked: !person.isChecked } : person
                                    ));
                                }} />
                            </td>
                            <td><input type="text" className="form-control" value={editForm.firstName} onChange={e => setEditForm({...editForm, firstName: e.target.value})} /></td>
                            <td><input type="text" className="form-control" value={editForm.lastName} onChange={e => setEditForm({...editForm, lastName: e.target.value})} /></td>
                            <td><input type="text" className="form-control" value={editForm.role} onChange={e => setEditForm({...editForm, role: e.target.value})} /></td>
                            <td><input type="number" className="form-control" value={editForm.experience} onChange={e => setEditForm({...editForm, experience: e.target.value})} /></td>
                            <td><input type="text" className="form-control" value={editForm.description} onChange={e => setEditForm({...editForm, description: e.target.value})} /></td>
                            <td>{p.addedDate}</td>
                            <td>
                                <div>
                                    <button className="btn btn-sm btn-success me-1" onClick={() => {
                                        if (!editForm.description.includes("-EDYCJA")) {
                                            editForm.description += " -EDYCJA";
                                        }
                                        setCrew(crew.map(person => person === p ? {
                                            ...person,
                                            ...editForm,
                                            modifiedDate: new Date().toISOString().split('T')[0] + ' ' + new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds(),
                                            isEdited: false,
                                            isModified: true,
                                        } : person));

                                    }}>Zapisz</button>
                                    <button className="btn btn-sm btn-secondary me-1" onClick={() => handleEdit(p)}>Anuluj</button>
                                </div>
                            </td>
                      </tr>
                  )

              ))}
                </tbody>
            </table>
        )}

        <h4>Statystyki ról</h4>
        {crew.length === 0 ? (
            <p>Brak osób w statystykach</p>
        ) : (
            <ul>
              {roles.map(r => {
                const count = crew.filter(p => p.role === r).length;
                return count > 0 ? <li key={r}>{r}: {count}</li> : null;
              })}
              {(() => {
                const otherRoles = crew
                  .map(p => p.role)
                  .filter(role => role && !roles.includes(role));
                const uniqueOtherRoles = [...new Set(otherRoles)];
                return uniqueOtherRoles.map(r => {
                  const count = crew.filter(p => p.role === r).length;
                  return <li key={r}>{r}: {count}</li>;
                });
              })()}
            </ul>
        )}

        <button className="btn btn-danger me-2" onClick={handleDeleteSelected}>Usuń zaznaczone</button>
        <button className="btn btn-secondary" onClick={handleReset}>Resetuj listę</button>
      </div>
  );
}
