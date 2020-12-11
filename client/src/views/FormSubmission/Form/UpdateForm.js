import { Button, Card, CardContent, Input, TextField } from '@material-ui/core'
import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

const UpdateForm = (props) => {
    const [existingForm, setExistingForm] = useState({})
    const [firstName, setFirstName] = useState('')
    const [firstNameStatus, setFirstNameStatus] = useState('')

    const [lastName, setLastName] = useState('')
    const [lastNameStatus, setLastNameStatus] = useState('')

    const [dateOfBirth, setDateOfBirth] = useState('')
    const [dateOfBirthStatus, setDateOfBirthStatus] = useState('')

    const [cityOfBirth, setCityOfBirth] = useState('')
    const [cityOfBirthStatus, setCityOfBirthStatus] = useState('')

    const [citizenship, setCitizenship] = useState('')
    const [citizenshipStatus, setCitizenshipStatus] = useState('')

    const [address, setAddress] = useState('')
    const [addressStatus, setAddressStatus] = useState('')

    const [streetName, setStreetName] = useState('')
    const [streetNameStatus, setStreetNameStatus] = useState('')

    const [postCode, setPostCode] = useState('')
    const [postCodeStatus, setPostCodeStatus] = useState('')

    const [city, setCity] = useState('')
    const [cityStatus, setCityStatus] = useState('')

    const [residendy, setResidendy] = useState('')
    const [residendyStatus, setResidendyStatus] = useState('')

    const [IDFront, setIDFront] = useState()
    const [IDFrontStatus, setIDFrontStatus] = useState()

    const [IDBack, setIDBack] = useState()
    const [IDBackStatus, setIDBackStatus] = useState()

    const [addressProof, setAddressProof] = useState('')
    const [addressProofStatus, setAddressProofStatus] = useState('')

    const [selfieVerification, setSelfieVerification] = useState()
    const [selfieVerificationStatus, setSelfieVerificationStatus] = useState()

    const [bankStatement, setBankStatement] = useState()
    const [bankStatementStatus, setBankStatementStatus] = useState()

    const [originofFunds, setOriginofFunds] = useState('')
    const [originofFundsStatus, setOriginofFundsStatus] = useState('')

    const [fundsOriginExplanation, setFundsOriginExplanation] = useState()
    const [fundsOriginExplanationStatus, setFundsOriginExplanationStatus] = useState()



    useEffect(() => {
        getData()
    }, [])
    const getData = () => {

        Axios.get(`/api/form/findUserForm/${props.auth.user.id}`)
            .then(res => {
                setExistingForm(res.data)
                setFirstName(res.data.firstName)
                setFirstNameStatus(res.data.firstNameStatus)

                setLastName(res.data.lastName)
                setLastNameStatus(res.data.lastNameStatus)

                setDateOfBirth(res.data.dateOfBirth)
                setDateOfBirthStatus(res.data.dateOfBirthStatus)

                setCityOfBirth(res.data.cityOfBirth)
                setCityOfBirthStatus(res.data.cityOfBirthStatus)

                setCitizenship(res.data.citizenship)
                setCitizenshipStatus(res.data.citizenshipStatus)

                setAddress(res.data.address)
                setAddressStatus(res.data.addressStatus)

                setStreetName(res.data.streetName)
                setStreetNameStatus(res.data.streetNameStatus)

                setPostCode(res.data.postCode)
                setPostCodeStatus(res.data.postCodeStatus)

                setCity(res.data.city)
                setCityStatus(res.data.cityStatus)

                setResidendy(res.data.residendy)
                setResidendyStatus(res.data.residendyStatus)

                setIDFront(res.data.IDFront)
                setIDFrontStatus(res.data.IDFrontStatus)

                setIDBack(res.data.IDBack)
                setIDBackStatus(res.data.IDBackStatus)

                setAddressProof(res.data.addressProof)
                setAddressProofStatus(res.data.addressProofStatus)

                setSelfieVerification(res.data.selfieVerification)
                setSelfieVerificationStatus(res.data.selfieVerificationStatus)

                setBankStatement(res.data.bankStatement)
                setBankStatementStatus(res.data.bankStatementStatus)

                setOriginofFunds(res.data.originOfFounds)
                setOriginofFundsStatus(res.data.originOfFoundsStatus)

                setFundsOriginExplanation(res.data.foundsOriginExplanation)
                setFundsOriginExplanationStatus(res.data.foundsOriginExplanationStatus)

            })
            .catch(err => {
                console.log(err);
            })
    }

    const submithandler = (event) => {
        event.preventDefault()
        let info = {
            UID: props.auth.user.id,
            firstName,
            firstNameStatus,

            lastName,
            lastNameStatus,

            dateOfBirth,
            dateOfBirthStatus,

            cityOfBirth,
            cityOfBirthStatus,

            citizenship,
            citizenshipStatus,

            address,
            addressStatus,

            streetName,
            streetNameStatus,

            postCode,
            postCodeStatus,

            city,
            cityStatus,

            residendy,
            residendyStatus,

            IDFront,
            IDFrontStatus,

            IDBack,
            IDBackStatus,

            addressProof,
            addressProofStatus,

            selfieVerification,
            selfieVerificationStatus,

            bankStatement,
            bankStatementStatus,

            originOfFounds: originofFunds,
            originOfFoundsStatus: originofFundsStatus,

            foundsOriginExplanation: fundsOriginExplanation,
            foundsOriginExplanationStatus: fundsOriginExplanationStatus
        }
        Axios.post('/api/form/resubmit', info)
            .then(res => {
                window.location.href='/form'

            })
            .catch(err => {
                console.log(err);
            })
    }
    const uploadFile = (event, setterFunction,statusSetter) => {
        event.preventDefault()
        let data = new FormData()
        data.append('file', event.target.files[0])
        Axios.post('/api/form/uploadFile', data)
            .then(res => {
                setterFunction(res.data.filename)
                statusSetter('updated')
            })
            .catch(err => {
                console.log(err);
            })
    }
    const detectExtension = (fileName) => {
        let ext = fileName.split('.')[1]
        return ext
    }

    return (
        <div className="col-md-8 offset-md-2 mt-5">
            <Card>
                <CardContent>
                    <form onSubmit={e => submithandler(e)} className="text-left">
                        <h4 className="text-center">  Re-submit Verification </h4>
                        <div className="row text-left">
                            <div className="col-md-4">
                                <TextField
                                    onChange={e => { setFirstName(e.target.value) }}
                                    onKeyPress={e => { setFirstNameStatus('updated') }}
                                    label="First Name"
                                    fullWidth
                                    value={firstName}
                                />
                                {
                                    existingForm.firstNameStatus === 'rejected' ?
                                        <label style={{ color: 'red', fontWeight: 700 }} > (Update Required) First Name</label>
                                        :
                                        <label>First Name</label>
                                }
                            </div>
                            <div className="col-md-4">
                                <TextField
                                    onChange={e => { setLastName(e.target.value) }}
                                    onKeyPress={e => { setLastNameStatus('updated') }}
                                    label="Last Name"
                                    fullWidth
                                    value={lastName}
                                />
                                {
                                    existingForm.lastNameStatus === 'rejected' ?
                                        <label style={{ color: 'red', fontWeight: 700 }} > (Update Required) Last Name</label>
                                        :
                                        <label>Last Name</label>
                                }
                            </div>
                            <div className="col-md-4">
                                <TextField
                                    onChange={e => { setDateOfBirth(e.target.value) }}
                                    onKeyPress={e => { setDateOfBirthStatus('updated') }}
                                    label="Date of Birth"
                                    type="date"
                                    fullWidth
                                    value={dateOfBirth}
                                />
                                {
                                    existingForm.dateOfBirthStatus === 'rejected' ?
                                        <label style={{ color: 'red', fontWeight: 700 }} > (Update Required) Date of Birth</label>
                                        :
                                        <label>Date of Birth</label>
                                }
                            </div>
                            <div className="col-md-4">
                                <TextField
                                    onChange={e => { setCityOfBirth(e.target.value) }}
                                    onKeyPress={e => { setCityOfBirthStatus('updated') }}
                                    label="City of Birth"
                                    type="date"
                                    fullWidth
                                    value={cityOfBirth}
                                />
                                {
                                    existingForm.cityOfBirthStatus === 'rejected' ?
                                        <label style={{ color: 'red', fontWeight: 700 }} > (Update Required) City of Birth</label>
                                        :
                                        <label>City of Birth</label>
                                }
                            </div>
                            <div className="col-md-4">
                                <TextField
                                    onChange={e => { setCitizenship(e.target.value) }}
                                    onKeyPress={e => { setCitizenshipStatus('updated') }}
                                    label="Citizenship "
                                    fullWidth
                                    value={citizenship}
                                />
                                {
                                    existingForm.citizenshipStatus === 'rejected' ?
                                        <label style={{ color: 'red', fontWeight: 700 }} > (Update Required) Citizenship </label>
                                        :
                                        <label>Citizenship </label>
                                }
                            </div>
                            <div className="col-md-4">
                                <TextField
                                    onChange={e => { setAddress(e.target.value) }}
                                    onKeyPress={e => { setAddressStatus('updated') }}
                                    label="Address"
                                    fullWidth
                                    value={address}
                                />
                                {
                                    existingForm.addressStatus === 'rejected' ?
                                        <label style={{ color: 'red', fontWeight: 700 }} > (Update Required) Address</label>
                                        :
                                        <label>Address</label>
                                }
                            </div>
                            <div className="col-md-4">
                                <TextField
                                    onChange={e => { setStreetName(e.target.value) }}
                                    onKeyPress={e => { setStreetNameStatus('updated') }}
                                    label="Street  Name"
                                    fullWidth
                                    value={streetName}
                                />
                                {
                                    existingForm.streetNameStatus === 'rejected' ?
                                        <label style={{ color: 'red', fontWeight: 700 }} > (Update Required) Street  Name</label>
                                        :
                                        <label>Street  Name</label>
                                }
                            </div>
                            <div className="col-md-4">
                                <TextField
                                    onChange={e => { setPostCode(e.target.value) }}
                                    onKeyPress={e => { setPostCodeStatus('updated') }}
                                    label="Post Code"
                                    fullWidth
                                    value={postCode}
                                />
                                {
                                    existingForm.postCodeStatus === 'rejected' ?
                                        <label style={{ color: 'red', fontWeight: 700 }} > (Update Required) Post Code</label>
                                        :
                                        <label>Post Code</label>
                                }
                            </div>
                            <div className="col-md-4">
                                <TextField
                                    onChange={e => { setCity(e.target.value) }}
                                    onKeyPress={e => { setCityStatus('updated') }}
                                    label="City"
                                    fullWidth
                                    value={city}
                                />
                                {
                                    existingForm.cityStatus === 'rejected' ?
                                        <label style={{ color: 'red', fontWeight: 700 }} > (Update Required) City</label>
                                        :
                                        <label>City</label>
                                }
                            </div>
                            <div className="col-md-4">
                                <TextField
                                    onChange={e => { setResidendy(e.target.value) }}
                                    onKeyPress={e => { setResidendyStatus('updated') }}
                                    label="Residendy"
                                    fullWidth
                                    value={residendy}
                                />
                                {
                                    existingForm.residendyStatus === 'rejected' ?
                                        <label style={{ color: 'red', fontWeight: 700 }} > (Update Required) Residendy</label>
                                        :
                                        <label>Residendy</label>
                                }
                            </div>
                        </div>


                        <hr />
                        <div className="row">
                            <div className="col-md-6">
                                <input
                                    onChange={e => uploadFile(e, setIDFront,setIDFrontStatus)}
                                    type="file"
                                    accept=" application/pdf, image/*"
                                    className="form-control"
                                />


                                {
                                    IDFrontStatus === 'rejected' ?
                                        <label style={{ color: 'red', fontWeight: '700' }}> ID Front</label> :
                                        <label>ID Front</label>
                                }
                            </div>
                            <div className="col-md-6">
                                <input
                                    className="form-control"
                                    onChange={e => uploadFile(e, setIDBack,setIDBackStatus)}
                                    label="ID Back"
                                    type="file"
                                    accept=" application/pdf, image/*"
                                />

                                {
                                    IDBackStatus === 'rejected' ?
                                        <label style={{ color: 'red', fontWeight: '700' }}> ID Back</label> :
                                        <label>ID Back</label>
                                }
                            </div>
                            <div className="col-md-6">
                                <input
                                    accept=" application/pdf, image/*"
                                    onChange={e => uploadFile(e, setAddressProof,setAddressProofStatus)}
                                    label="Address Proof"
                                    type="file"
                                    className="form-control"
                                />

                                {
                                    addressProofStatus === 'rejected' ?
                                        <label style={{ color: 'red', fontWeight: '700' }}> Address Proof</label> :
                                        <label>Address Proof</label>
                                }
                            </div>
                            <div className="col-md-6">
                                <input
                                    accept=" application/pdf, image/*"
                                    type="file"
                                    onChange={e => uploadFile(e, setSelfieVerification,setSelfieVerificationStatus)}
                                    label="Selfie Verification "
                                    className="form-control"
                                />

                                {
                                    selfieVerificationStatus === 'rejected' ?
                                        <label style={{ color: 'red', fontWeight: '700' }}> Selfie Verification </label> :
                                        <label>Selfie Verification </label>
                                }
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-md-6">
                                <input
                                    onChange={e => uploadFile(e, setBankStatement,setBankStatementStatus)}
                                    label="Bank Statement "
                                    type="file"
                                    accept=" application/pdf, image/*"
                                    className="form-control"
                                />
                                {
                                    bankStatementStatus === 'rejected' ?
                                        <label style={{ color: 'red', fontWeight: '700' }}>Bank Statement (Update Required) </label> :
                                        <label>Bank Statement </label>
                                }
                            </div>
                            <div className="col-md-6">
                                <TextField
                                    onChange={e => { setOriginofFunds(e.target.value) }}
                                    onKeyPress={e => { setOriginofFundsStatus('updated') }}
                                    label="Origin  of Funds"
                                    fullWidth
                                    value={originofFunds}
                                />
                                {
                                    existingForm.originOfFoundsStatus === 'rejected' ?
                                        <label style={{ color: 'red', fontWeight: 700 }} > (Update Required) Origin  of Funds</label>
                                        :
                                        <label>Origin  of Funds</label>
                                }
                            </div>
                            <div className="col-md-12">
                                <TextField
                                    onChange={e => { setFundsOriginExplanation(e.target.value) }}
                                    onKeyPress={e => { setFundsOriginExplanationStatus('updated') }}
                                    label="Funds origin explanation"
                                    fullWidth
                                    value={fundsOriginExplanation}
                                />
                                {
                                    existingForm.foundsOriginExplanationStatus === 'rejected' ?
                                        <label style={{ color: 'red', fontWeight: 700 }} > (Update Required) Funds origin explanation</label>
                                        :
                                        <label>Funds origin explanation</label>
                                }
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
                                    <Button color="secondary" variant="outlined" size="small" onClick={e => console.log(
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
                                        originofFunds, fundsOriginExplanation)}   >Fill up Rqquired Filed</Button>
                            }
                        </div>
                    </form>
                </CardContent >
            </Card >
        </div>
    )
}
const mapStateToProps = state => ({
    auth: state.auth
})
export default connect(mapStateToProps, null)(UpdateForm)
