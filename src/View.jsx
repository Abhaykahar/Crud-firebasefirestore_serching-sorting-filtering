import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DELETE_USER, EDIT_USER, FilterRecord, VIEW_USER } from './Redux/Action/LoginAction';
import { useNavigate } from 'react-router-dom';

function View() {
    const users = useSelector((state) => state.login.user);
    const [status, setStatus] = useState("");
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(VIEW_USER());
    }, [dispatch]);

    useEffect(() => {
        dispatch(FilterRecord(status, search, sort));
    }, [status, search, sort, dispatch]);

    const deleteRecord = (id) => {
        dispatch(DELETE_USER(id));
    };


    const toggleStatus = (user) => {
      const updatedUser = {
          ...user,
          status: user.status === "active" ? "deactive" : "active",
      };
      dispatch(EDIT_USER(updatedUser));
  };

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 border mt-5 overflow-hidden">
                        <div className="d-flex mt-5 ">
                        <div className="col-lg-4 ">
                            <select className='form-control' onChange={(e) => setStatus(e.target.value)} value={status}>
                                <option value="">---select status---</option>
                                <option value="active">active</option>
                                <option value="deactive">deactive</option>
                            </select>
                        </div>

                        <div className='col-lg-4  ms-3'>
                            <input type="text" onChange={(e) => setSearch(e.target.value)} value={search} className='form-control' placeholder='Email Search' />
                        </div>

                        <div className="col-lg-4  ms-3">
                            <select className='form-control' onChange={(e) => setSort(e.target.value)} value={sort}>
                                <option value="">---select sort---</option>
                                <option value="asc">A-Z</option>
                                <option value="dsc">Z-A</option>
                            </select>
                        </div>
                        </div>

                        <table className="table mt-5">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Password</th>
                                    <th scope="col">status</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((val, index) => (
                                    <tr key={val.id}>
                                        <td>{index + 1}</td>
                                        <td>{val.email}</td>
                                        <td>{val.password}</td>
                                        <td>
                                            <button 
                                                className={`btn btn-sm ${val.status === "active" ? "btn-success" : "btn-warning"}`}
                                                onClick={() => toggleStatus(val)}
                                            >
                                                {val.status === "active" ? "Active" : "Deactive"}
                                            </button>
                                        </td>
                                        <td>
                                            <button className='btn btn-danger btn-sm' onClick={() => deleteRecord(val.id)}>Delete</button>
                                            <button className='btn btn-success btn-sm ms-4' onClick={() => navigate('/edit', { state: val })}>Edit</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default View;
