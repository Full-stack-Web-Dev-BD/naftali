import { Button, Card, CardContent, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import { DeleteOutline } from '@material-ui/icons'
import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const AvailableForm = () => {
    const [allForms, setAllForms] = useState([])

    useEffect(() => {
        Axios.get('/api/form/findForm')
            .then(res => {
                setAllForms(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])
    return (
        <div className="col-md-8 offset-md-2 mt-5">
            <Card>
                <CardContent>
                    <h2>All Available Forms (  {allForms.length} )</h2>
                    <hr />
                    <TableContainer >
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left"> User ID  </TableCell>
                                    <TableCell align="left"> Details  </TableCell>
                                    <TableCell align="left"> Action </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {allForms.map((el) => (
                                    <TableRow key={el._id}>
                                        <TableCell align="left"> {el._id}</TableCell>
                                        <TableCell align="left"> <Link to={`/formDetails?formid=${el._id}`}> <Button size="small" color="secondary" variant="contained" > Details </Button> </Link></TableCell>
                                        <TableCell align="left"> <Button size="small" color="secondary" variant="outlined" > <DeleteOutline /> Delete  </Button> </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </CardContent>
            </Card>
        </div>
    )
}

export default AvailableForm
