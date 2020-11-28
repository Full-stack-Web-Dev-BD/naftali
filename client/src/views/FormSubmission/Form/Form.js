import { Button, Card, CardContent, TextField } from '@material-ui/core'
import React, { useState } from 'react'

const Form = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')
    const [cityOfBirth, setCityOfBirth] = useState('')
    const [citizenship, setCitizenship] = useState('')
    const [address, setAddress] = useState('')
    const [streetName, setStreetName] = useState('')
    const [postCode, setPostCode] = useState('')
    const [city, setCity] = useState('')
    const [residendy, setResidendy] = useState('')
    const [IDFront, setIDFront] = useState()
    const [IDBack, setIDBack] = useState()
    const [addressProof, setAddressProof] = useState('')
    const [selfieVerification, setSelfieVerification] = useState()
    const [bankStatement, setBankStatement] = useState()
    const [originofFunds, setOriginofFunds] = useState('')
    const [fundsOriginExplanation, setFundsOriginExplanation] = useState()
    return (
        <Card>
            <CardContent>
                <form>
                    <h4 className="text-center"> Verification Form 1</h4>
                    <div className="row">

                        <div className="col-md-4">
                            <TextField
                                onChange={e=>setFirstName(e.target.value)}
                                label="First Name"
                                fullWidth

                            />
                        </div>
                        <div className="col-md-4">
                            <TextField
                                onChange={e=>setLastName(e.target.value)}
                                label="Last Name"
                                fullWidth
                            />
                        </div>
                        <div className="col-md-4">
                            <TextField
                                onChange={e=>setDateOfBirth(e.target.value)}
                                label="Date of Birth"
                                fullWidth
                            />
                        </div>
                        <div className="col-md-4">
                            <TextField
                                onChange={e=>setCityOfBirth(e.target.value)}
                                label="City of Birth"
                                fullWidth
                            />
                        </div>
                        <div className="col-md-4">
                            <TextField
                                onChange={e=>setCitizenship(e.target.value)}
                                label="Citizenship "
                                fullWidth
                            />
                        </div>
                        <div className="col-md-4">
                            <TextField
                                onChange={e=>setAddress(e.target.value)}
                                label="Address"
                                fullWidth
                            />
                        </div>
                        <div className="col-md-4">
                            <TextField
                                onChange={e=>setStreetName(e.target.value)}
                                label="Street  Name"
                                fullWidth
                            />
                        </div>
                        <div className="col-md-4">
                            <TextField
                                onChange={e=>setPostCode(e.target.value)}
                                label="Post Code"
                                fullWidth
                            />
                        </div>
                        <div className="col-md-4">
                            <TextField
                                onChange={e=>setCity(e.target.value)}
                                label="City"
                                fullWidth
                            />
                        </div>
                        <div className="col-md-4">
                            <TextField
                                onChange={e=>setResidendy(e.target.value)}
                                label="Residendy"
                                fullWidth
                            />
                        </div>
                    </div>


                    <hr />
                    <div className="row">
                        <div className="col-md-4">
                            <TextField
                                onChange={e=>setIDFront(e.target.value)}
                                label="ID Front"
                                fullWidth
                                type="file"
                            />
                        </div>
                        <div className="col-md-4">
                            <TextField
                                onChange={e=>setIDBack(e.target.value)}
                                label="ID Back"
                                fullWidth
                                type="file"
                            />
                        </div>
                        <div className="col-md-4">
                            <TextField
                                onChange={e=>setAddressProof(e.target.value)}
                                label="Address Proof"
                                fullWidth
                            />
                        </div>
                        <div className="col-md-4">
                            <TextField
                                onChange={e=>setSelfieVerification(e.target.value)}
                                label="Selfie Verification "
                                fullWidth
                            />
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-md-4">
                            <TextField
                                onChange={e=>setBankStatement(e.target.value)}
                                label="Bank Statement "
                                fullWidth
                            />
                        </div>
                        <div className="col-md-4">
                            <TextField
                                onChange={e=>setOriginofFunds(e.target.value)}
                                label="Origin  of Funds"
                                fullWidth
                            />
                        </div>
                        <div className="col-md-12">
                            <TextField
                                onChange={e=>setFundsOriginExplanation(e.target.value)}
                                label="Funds origin explanation"
                                fullWidth
                                rows="3"
                            />
                        </div>
                    </div>
                    <div  className="text-right pt-4">
                        <Button color="secondary"  type="submit" variant="contained" size="small"  >Submit Verification</Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    )
}

export default Form
