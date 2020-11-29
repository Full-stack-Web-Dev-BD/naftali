import { Button, Card, CardContent, Input, TextField } from '@material-ui/core'
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
    return (<Card>
            <CardContent>
                <form className="text-left">
                    <h4 className="text-center"> Verification Form 1</h4>
                    <div className="row text-left">
                        <div className="col-md-4">
                            <TextField
                                onChange={e => setFirstName(e.target.value)}
                                label="First Name"
                                fullWidth
                            />
                            <label>First Name</label>
                        </div>
                        <div className="col-md-4">
                            <TextField
                                onChange={e => setLastName(e.target.value)}
                                label="Last Name"
                                fullWidth
                            />
                            <label>Last Name</label>
                        </div>
                        <div className="col-md-4">
                            <TextField
                                onChange={e => setDateOfBirth(e.target.value)}
                                label="Date of Birth"
                                fullWidth
                            />
                            <label>Date of Birth</label>
                        </div>
                        <div className="col-md-4">
                            <TextField
                                onChange={e => setCityOfBirth(e.target.value)}
                                label="City of Birth"
                                fullWidth
                            />
                            <label>City of Birth</label>
                        </div>
                        <div className="col-md-4">
                            <TextField
                                onChange={e => setCitizenship(e.target.value)}
                                label="Citizenship "
                                fullWidth
                            />
                            <label>Citizenship </label>
                        </div>
                        <div className="col-md-4">
                            <TextField
                                onChange={e => setAddress(e.target.value)}
                                label="Address"
                                fullWidth
                            />
                            <label>Address</label>
                        </div>
                        <div className="col-md-4">
                            <TextField
                                onChange={e => setStreetName(e.target.value)}
                                label="Street  Name"
                                fullWidth
                            />
                            <label>Street  Name</label>
                        </div>
                        <div className="col-md-4">
                            <TextField
                                onChange={e => setPostCode(e.target.value)}
                                label="Post Code"
                                fullWidth
                            />
                            <label>Post Code</label>
                        </div>
                        <div className="col-md-4">
                            <TextField
                                onChange={e => setCity(e.target.value)}
                                label="City"
                                fullWidth
                            />
                            <label>City</label>
                        </div>
                        <div className="col-md-4">
                            <TextField
                                onChange={e => setResidendy(e.target.value)}
                                label="Residendy"
                                fullWidth
                            />
                            <label>Residendy</label>
                        </div>
                    </div>


                    <hr />
                    <div className="row">
                        <div className="col-md-6">
                            <input
                                onChange={e => setIDFront((e.target.files[0]))}
                                type="file"
                                accept=" application/pdf, image/*"
                                className="form-control"
                            />
                            <label>ID Front</label>

                        </div>
                        <div className="col-md-6">
                            <input
                                className="form-control"
                                onChange={e => setIDBack((e.target.files[0]))}
                                label="ID Back"
                                type="file"
                                accept=" application/pdf, image/*"
                            />
                            <label>ID Back</label>
                        </div>
                        <div className="col-md-6">
                            <input
                                accept=" application/pdf, image/*"
                                onChange={e => setAddressProof((e.target.files[0]))}
                                label="Address Proof"
                                type="file"
                                className="form-control"
                            />
                            <label>Address Proof</label>
                        </div>
                        <div className="col-md-6">
                            <input
                                accept=" application/pdf, image/*"
                                type="file"
                                onChange={e => setSelfieVerification((e.target.files[0]))}
                                label="Selfie Verification "
                                className="form-control"
                            />
                            <label>Selfie Verification </label>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-md-6">
                            <input
                                onChange={e => setBankStatement((e.target.files[0]))}
                                label="Bank Statement "
                                type="file"
                                accept=" application/pdf, image/*"
                                className="form-control"
                            />
                            <label>Bank Statement </label>
                        </div>
                        <div className="col-md-6">
                            <TextField
                                onChange={e => setOriginofFunds(e.target.value)}
                                label="Origin  of Funds"
                                fullWidth
                            />
                            <label>Origin  of Funds</label>
                        </div>
                        <div className="col-md-12">
                            <TextField
                                onChange={e => setFundsOriginExplanation(e.target.value)}
                                label="Funds origin explanation"
                                fullWidth
                                rows="3"
                            />
                            <label>Funds origin explanation</label>
                        </div>
                    </div>
                    <div className="text-right pt-4">
                        <Button color="secondary" type="submit" variant="contained" size="small"  >Submit Verification</Button>
                    </div>
                </form>
            </CardContent >
        </Card >
    )
}

export default Form
