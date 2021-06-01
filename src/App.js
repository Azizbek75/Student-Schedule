import React, {Component} from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            students: [],
            selectedIndex: -1,
            text: '',
            k:0,
            type:'all'
        }
    }

    render() {

        const addStudent = (event) => {
            event.preventDefault();
            console.log(event.target)

            let studentSurname = event.target.studentSurname.value,
                studentName = event.target.studentName.value,
                studentContract = event.target.studentContract.value;

            if (studentSurname != '' && studentName != '' && studentContract != '') {
                let newStudent = {
                    surname: studentSurname,
                    name: studentName,
                    contract: studentContract
                }

                if (this.state.selectedIndex >= 0) {
                    this.state.students[this.state.selectedIndex] = newStudent;
                } else {
                    this.state.students.push(newStudent);
                }


                this.setState({
                    students: this.state.students,
                    selectedIndex: -1
                });
                event.target.reset();
            } else {
                alert('Ma`lumot to`liq kiritmadiz!!!');
            }

        }

        const deleteStudent = (index) => {
            this.state.students.splice(index, 1);
            this.setState({
                students: this.state.students
            })
        }

        const editStudent = (index) => {
            this.setState({
                selectedIndex: index
            })
        }

        const search = (event) => {
            console.log(event.target.value);
            this.state.text = event.target.value;
            this.setState({
                text: this.state.text
            })

            if (this.state.text === "" || this.state.text !=='') {
                this.state.k=0;
                this.setState({
                    k:this.state.k
                })
            }
        }
        const change = (event) => {
            this.state.type = event.target.value;
            this.setState({
                type:this.state.type
            })
        }


        return (
            <div className={'container mt-4'}>
                <div className="row">
                    <div className="col-4">
                        <div className="card">
                            <div className="card-header text-center">
                                <h5>Students Add</h5>
                            </div>
                            <div className="card-body">
                                <form onSubmit={addStudent}>
                                    <label htmlFor="surname" className={'mt-1'}>Student Surname:</label>
                                    <input type="text"
                                           defaultValue={this.state.students[this.state.selectedIndex]?.surname}
                                           className={'form-control mt-2'} id={'surname'}
                                           placeholder={'Student Surname...'}
                                           name={'studentSurname'}/>
                                    <label htmlFor="name" className={'mt-1'}>Student Name:</label>
                                    <input type="text" className={'form-control mt-2'}
                                           defaultValue={this.state.students[this.state.selectedIndex]?.name}
                                           placeholder={'Student Name...'}
                                           id={'name'}
                                           name={'studentName'}/>
                                    <label htmlFor="contract" className={'mt-1'}>Student Contract:</label>
                                    <input type="text" className={'form-control mt-2'}
                                           defaultValue={this.state.students[this.state.selectedIndex]?.contract}
                                           id={'contract'}
                                           placeholder={'Student Contract..'}
                                           name={'studentContract'}/>
                                    <button className={'btn btn-warning mt-3'}>Add</button>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="col-8 overflow-auto" style={{maxHeight: '567px'}}>
                        <table className={'table table-striped  text-center'}>
                            <thead>
                            <tr>
                                <th>№</th>
                                <th>Surname</th>
                                <th>Name</th>
                                <th>
                                    <form  className={'' +
                                    'w-75'} onChange={change}>
                                        <select className={'form-select'} >
                                            <option value="all">All</option>
                                            <option value="budjet">Budjet</option>
                                            <option value="contract">Contract</option>
                                        </select>
                                    </form>
                                </th>
                                <th width={'160px'}>
                                    <input type="search" className={'form-control'} name={'search'}
                                           placeholder={'Search...'} onKeyUp={search}/>
                                </th>
                            </tr>
                            </thead>
                            <tbody className={'book-list'}>
                            {
                                this.state.students.map((item, index) => {
                                    if (this.state.text === '') {
                                        if((item.contract==='budjet' || item.contract==='contract') && this.state.type==='all') return (<tr>
                                            <td>{index + 1}</td>
                                            <td>{item.surname}</td>
                                            <td>{item.name}</td>
                                            <td>{item.contract}</td>
                                            <td width={'160px'}>
                                                <button type={'button'} className={'btn btn-warning '} onClick={() => {
                                                    editStudent(index)
                                                }}>Edit
                                                </button>
                                                <button type={'button'} className={'btn btn-danger mx-2'}
                                                        onClick={() => {
                                                            deleteStudent(index)
                                                        }}>Delete
                                                </button>
                                            </td>
                                        </tr>);
                                        else if(item.contract==='budjet' && this.state.type==='budjet') return (<tr>
                                            <td>{index + 1}</td>
                                            <td>{item.surname}</td>
                                            <td>{item.name}</td>
                                            <td>{item.contract}</td>
                                            <td width={'160px'}>
                                                <button type={'button'} className={'btn btn-warning '} onClick={() => {
                                                    editStudent(index)
                                                }}>Edit
                                                </button>
                                                <button type={'button'} className={'btn btn-danger mx-2'}
                                                        onClick={() => {
                                                            deleteStudent(index)
                                                        }}>Delete
                                                </button>
                                            </td>
                                        </tr>);
                                        else if(item.contract==='contract' && this.state.type==='contract') return (<tr>
                                            <td>{index + 1}</td>
                                            <td>{item.surname}</td>
                                            <td>{item.name}</td>
                                            <td>{item.contract}</td>
                                            <td width={'160px'}>
                                                <button type={'button'} className={'btn btn-warning '} onClick={() => {
                                                    editStudent(index)
                                                }}>Edit
                                                </button>
                                                <button type={'button'} className={'btn btn-danger mx-2'}
                                                        onClick={() => {
                                                            deleteStudent(index)
                                                        }}>Delete
                                                </button>
                                            </td>
                                        </tr>);
                                    }
                                    else if ((item.surname + item.name).toUpperCase().includes(this.state.text.toUpperCase())) return (
                                        <tr>

                                            <td>{index + 1}</td>
                                            <td>{item.surname}</td>
                                            <td>{item.name}</td>
                                            <td>{item.contract}</td>
                                            <td width={'160px'}>
                                                <button type={'button'} className={'btn btn-warning '} onClick={() => {
                                                    editStudent(index)
                                                }}>Edit
                                                </button>
                                                <button type={'button'} className={'btn btn-danger mx-2'}
                                                        onClick={() => {
                                                            deleteStudent(index)
                                                        }}>Delete
                                                </button>
                                            </td>
                                        </tr>);
                                    else {
                                        if (this.state.k===this.state.students.length-1) {
                                           this.state.k=0;
                                            return `               Search not found!`;
                                        }else {
                                            {this.state.k+=1}
                                        }
                                    }
                                })
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
