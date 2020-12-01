import { Button, Card, CardContent, Input, TextField } from '@material-ui/core'
import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import FileViewer from '../FileViewer'

const Form = (props) => {
    const [existingForm, setExistingForm] = useState({})

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


    useEffect(() => {
        Axios.get(`/api/form/findUserForm/${props.auth.user.id}`)
            .then(res => {
                setExistingForm(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])


    const submithandler = (event) => {
        event.preventDefault()
        let info = {
            UID: props.auth.user.id,
            firstName,
            lastName,
            dateOfBirth,
            cityOfBirth,
            citizenship,
            address,
            streetName,
            postCode,
            city,
            residendy,
            IDFront,
            IDBack,
            addressProof,
            selfieVerification,
            bankStatement,
            originOfFounds: originofFunds,
            foundsOriginExplanation: fundsOriginExplanation
        }
        Axios.post('/api/form/submitForm', info)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }
    const uploadFile = (event, setterFunction) => {
        event.preventDefault()
        let data = new FormData()
        data.append('file', event.target.files[0])
        Axios.post('/api/form/uploadFile', data)
            .then(res => {
                setterFunction(res.data.filename)
            })
            .catch(err => {
                console.log(err);
            })
    }
    const detectExtension = (fileName) => {
        let ext = fileName.split('.')[1]
        return ext
    }

    return (<Card>
        <CardContent>
            {
                existingForm ?

                    <form onSubmit={e => submithandler(e)} className="text-left">
                        <h4 className="text-center"> Submitted  Form </h4>
                        <div className="row text-left">
                            <div className="col-md-4">
                                <TextField
                                    disabled
                                    value={existingForm.firstName}
                                    onChange={e => setFirstName(e.target.value)}
                                    label="First Name"
                                    fullWidth
                                />
                                <label  ><b>Status :</b> {existingForm.firstNameStatus}</label>
                            </div>
                            <div className="col-md-4">
                                <TextField
                                    disabled
                                    value={existingForm.lastName}
                                    onChange={e => setLastName(e.target.value)}
                                    label="Last Name"
                                    fullWidth
                                />
                                <label><b>Status :</b> {existingForm.lastNameStatus}</label>
                            </div>
                            <div className="col-md-4">
                                <TextField
                                    disabled
                                    value={existingForm.dateOfBirth}
                                    onChange={e => setDateOfBirth(e.target.value)}
                                    label="Date of Birth"
                                    fullWidth
                                />
                                <label><b>Status :</b> {existingForm.dateOfBirthStatus}</label>
                            </div>
                            <div className="col-md-4">
                                <TextField
                                    disabled
                                    value={existingForm.cityOfBirth}
                                    onChange={e => setCityOfBirth(e.target.value)}
                                    label="City of Birth"
                                    fullWidth
                                />
                                <label><b>Status :</b> {existingForm.cityOfBirthStatus}</label>
                            </div>
                            <div className="col-md-4">
                                <TextField
                                    disabled
                                    value={existingForm.citizenship}
                                    onChange={e => setCitizenship(e.target.value)}
                                    label="Citizenship "
                                    fullWidth
                                />
                                <label><b>Status : </b> {existingForm.citizenshipStatus} </label>
                            </div>
                            <div className="col-md-4">
                                <TextField
                                    disabled
                                    value={existingForm.address}
                                    onChange={e => setAddress(e.target.value)}
                                    label="Address"
                                    fullWidth
                                />
                                <label><b>Status :</b> {existingForm.addressStatus}</label>
                            </div>
                            <div className="col-md-4">
                                <TextField
                                    disabled
                                    value={existingForm.streetName}
                                    onChange={e => setStreetName(e.target.value)}
                                    label="Street  Name"
                                    fullWidth
                                />
                                <label><b>Status :</b> {existingForm.streetNameStatus}</label>
                            </div>
                            <div className="col-md-4">
                                <TextField
                                    disabled
                                    value={existingForm.postCode}
                                    onChange={e => setPostCode(e.target.value)}
                                    label="Post Code"
                                    fullWidth
                                />
                                <label><b>Status</b> {existingForm.postCodeStatus} </label>
                            </div>
                            <div className="col-md-4">
                                <TextField
                                    disabled
                                    value={existingForm.city}
                                    onChange={e => setCity(e.target.value)}
                                    label="City"
                                    fullWidth
                                />
                                <label><b>Status :</b> {existingForm.cityStatus}</label>
                            </div>
                            <div className="col-md-4">
                                <TextField
                                    disabled
                                    value={existingForm.residendy}
                                    onChange={e => setResidendy(e.target.value)}
                                    label="Residendy"
                                    fullWidth
                                />
                                <label><b>Status :</b> {existingForm.residendyStatus}</label>
                            </div>
                        </div>


                        <hr />
                        <div className="row">
                            <div className="col-md-6">

                                {
                                    existingForm.IDBack ?
                                        <div>
                                            {
                                                existingForm.IDFrontStatus === 'rejected' ?
                                                    <input
                                                        disabled
                                                        // value={existingForm.IDFront}
                                                        onChange={e => uploadFile(e, setIDFront)}
                                                        type="file"
                                                        accept=" application/pdf, image/*"
                                                        className="form-control"
                                                    /> :
                                                    <div>
                                                        <p> ID Front</p>
                                                        {
                                                            detectExtension(existingForm.IDFront) === 'pdf' ?
                                                                <embed src={`/uploads/${existingForm.IDFront}`} width="100%" height="200px" /> :
                                                                <img src={`/uploads/${existingForm.IDFront}`} style={{ width: '100% ', height: '200px' }} />
                                                        }
                                                    </div>
                                            }
                                        </div> :
                                        <p>File Not found</p>
                                }
                                <label><b>Status : </b> {existingForm.IDFrontStatus} </label>
                            </div>
                            <div className="col-md-6">
                                {
                                    existingForm.IDBack ?
                                        <div>
                                            {
                                                existingForm.IDBackStatus === 'rejected' ?
                                                    <input
                                                        disabled
                                                        // value={existingForm.IDBack}
                                                        className="form-control"
                                                        onChange={e => uploadFile(e, setIDBack)}
                                                        label="ID Back"
                                                        type="file"
                                                        accept=" application/pdf, image/*"
                                                    /> :
                                                    <div>
                                                        <p> ID Back </p>
                                                        {
                                                            detectExtension(existingForm.IDBack) === 'pdf' ?
                                                                <embed src={`/uploads/${existingForm.IDBack}`} width="100%" height="200px" /> :
                                                                <img src={`/uploads/${existingForm.IDBack}`} style={{ width: '100% ', height: '200px' }} />
                                                        }
                                                    </div>
                                            }
                                        </div> :
                                        <p>File Not found</p>
                                }
                                <label><b>Status : </b> {existingForm.IDBackStatus} </label>
                            </div>
                            <div className="col-md-6">

                                {
                                    existingForm.IDBack ?
                                        <div>
                                            {
                                                existingForm.addressProofStatus === 'rejected' ?
                                                    <input
                                                        disabled
                                                        // value={existingForm.addressProof}
                                                        accept=" application/pdf, image/*"
                                                        onChange={e => uploadFile(e, setAddressProof)}
                                                        label="Address Proof"
                                                        type="file"
                                                        className="form-control"
                                                    /> :
                                                    <div>

                                                        <label>Address Proof</label>
                                                        {
                                                            detectExtension(existingForm.addressProof) === 'pdf' ?
                                                                <embed src={`/uploads/${existingForm.addressProof}`} width="100%" height="200px" /> :
                                                                <img src={`/uploads/${existingForm.addressProof}`} style={{ width: '100% ', height: '200px' }} />
                                                        }
                                                    </div>
                                            }
                                        </div> :
                                        <p>File Not found</p>
                                }
                                <label><b>Status : </b> {existingForm.addressProofStatus} </label>

                            </div>
                            <div className="col-md-6">

                                {
                                    existingForm.IDBack ?
                                        <div>
                                            {
                                                existingForm.selfieVerificationStatus === 'rejected' ?
                                                    <input
                                                        disabled
                                                        // value={existingForm.selfieVerification}
                                                        accept=" application/pdf, image/*"
                                                        type="file"
                                                        onChange={e => uploadFile(e, setSelfieVerification)}
                                                        label="Selfie Verification "
                                                        className="form-control"
                                                    /> :
                                                    <div>
                                                        <label>Selfie Verification </label>
                                                        {
                                                            detectExtension(existingForm.selfieVerification) === 'pdf' ?
                                                                <embed src={`/uploads/${existingForm.selfieVerification}`} width="100%" height="200px" /> :
                                                                <img src={`/uploads/${existingForm.selfieVerification}`} style={{ width: '100% ', height: '200px' }} />
                                                        }
                                                    </div>
                                            }
                                        </div> :
                                        <p>File Not found</p>
                                }
                                <label><b>Status : </b> {existingForm.selfieVerificationStatus} </label>

                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-md-6">

                                {
                                    existingForm.IDBack ?
                                        <div>
                                            {
                                                existingForm.bankStatementStatus === 'rejected' ?

                                                    <input
                                                        disabled
                                                        // value={existingForm.bankStatement}
                                                        onChange={e => uploadFile(e, setBankStatement)}
                                                        label="Bank Statement "
                                                        type="file"
                                                        accept=" application/pdf, image/*"
                                                        className="form-control"
                                                    /> :
                                                    <div>
                                                        <label>Bank Statement </label>
                                                        {
                                                            detectExtension(existingForm.bankStatement) === 'pdf' ?
                                                                <embed src={`/uploads/${existingForm.bankStatement}`} width="100%" height="200px" /> :
                                                                <img src={`/uploads/${existingForm.bankStatement}`} style={{ width: '100% ', height: '200px' }} />
                                                        }
                                                    </div>
                                            }
                                        </div> :
                                        <p>File Not found</p>
                                }
                                <label><b>Status : </b> {existingForm.bankStatementStatus} </label>

                            </div>
                            <div className="col-md-6">
                                <TextField
                                    disabled
                                    value={existingForm.originOfFounds}
                                    onChange={e => setOriginofFunds(e.target.value)}
                                    label="Origin  of Funds"
                                    fullWidth
                                />
                                <label><b>Status :</b> {existingForm.originOfFoundsStatus}</label>
                            </div>
                            <div className="col-md-12">
                                <TextField
                                    disabled
                                    value={existingForm.foundsOriginExplanationStatus}
                                    onChange={e => setFundsOriginExplanation(e.target.value)}
                                    label="Funds origin explanation"
                                    fullWidth
                                    rows="3"
                                />
                                <label><b>Status :</b> {existingForm.foundsOriginExplanationStatus}</label>
                            </div>
                        </div>
                        <div className="text-right pt-4">
                            <Button color="secondary" type="submit" variant="contained" size="small"  >Update  Verification</Button>
                        </div>
                    </form> :

                    <form onSubmit={e => submithandler(e)} className="text-left">
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
                                    onChange={e => uploadFile(e, setIDFront)}
                                    type="file"
                                    accept=" application/pdf, image/*"
                                    className="form-control"
                                />
                                <label>ID Front</label>

                            </div>
                            <div className="col-md-6">
                                <input
                                    className="form-control"
                                    onChange={e => uploadFile(e, setIDBack)}
                                    label="ID Back"
                                    type="file"
                                    accept=" application/pdf, image/*"
                                />
                                <label>ID Back</label>
                            </div>
                            <div className="col-md-6">
                                <input
                                    accept=" application/pdf, image/*"
                                    onChange={e => uploadFile(e, setAddressProof)}
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
                                    onChange={e => uploadFile(e, setSelfieVerification)}
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
                                    onChange={e => uploadFile(e, setBankStatement)}
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
                            {

                                firstName &&
                                    lastName &&
                                    dateOfBirth &&
                                    cityOfBirth &&
                                    citizenship &&
                                    address &&
                                    streetName &&
                                    postCode &&
                                    city &&
                                    residendy &&
                                    IDFront &&
                                    IDBack &&
                                    addressProof &&
                                    selfieVerification &&
                                    bankStatement &&
                                    originofFunds && fundsOriginExplanation ?
                                    <Button color="secondary" type="submit" variant="contained" size="small"  >Submit Verification</Button> :
                                    <Button color="secondary" variant="outlined" size="small"  >Fill up Rqquired Filed</Button>

                            }
                        </div>
                    </form>
            }
        </CardContent >
    </Card >
    )
}
const mapStateToProps = state => ({
    auth: state.auth
})
export default connect(mapStateToProps, null)(Form)
