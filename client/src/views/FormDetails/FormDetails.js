import { Button, Card, CardContent, TextField } from '@material-ui/core'
import Axios from 'axios'
import React, { useState } from 'react'
import qs from 'query-string'
import { connect } from 'react-redux'
const FormDetails = (props) => {
    const { user } = props.auth

    let getData = () => {

        let url = qs.parse(window.location.search)
        Axios.get(`/api/form/getSingleForm/${url.formid}`)
            .then(res => {
                setExistingForm(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }
    const [existingForm, setExistingForm] = useState({})
    useState(() => {
        getData()
    }, [])
    const detectExtension = (fileName) => {
        let ext = fileName.split('.')[1]
        return ext
    }
    const acceptFormFiled = (status) => {
        let updatedExisingForm = existingForm
        updatedExisingForm[status.statusName] = 'accepted'
        Axios.post(`/api/form/acceptFiled/${user.id}`, { updatedForm: updatedExisingForm })
            .then(res => {
                getData()
            })
            .catch(err => {
                console.log(err);
            })
    }
    const rejectFormFiled = (status) => {

        let updatedExisingForm = existingForm
        updatedExisingForm[status.statusName] = 'rejected'
        Axios.post(`/api/form/acceptFiled/${user.id}`, { updatedForm: updatedExisingForm })
            .then(res => {
                getData()
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <div className="col-md-8 offset-md-2 mt-5">
            <Card>
                <CardContent>

                    <form className="text-left">
                        <h4 className="text-center"> Submitted  Form </h4>
                        <div className="row text-left">
                            <div className="col-md-4">
                                <p>First Name</p>
                                <TextField
                                    disabled
                                    value={existingForm.firstName}
                                    // label="First Name"
                                    fullWidth
                                />
                                {
                                    existingForm.firstNameStatus === 'pending' || existingForm.firstNameStatus === 'updated' ?
                                        <div>
                                            <Button onClick={e => { acceptFormFiled({ firstNameStatus: existingForm.firstNameStatus, statusName: 'firstNameStatus' }) }} size="small" variant="outlined" color="secondary" > Aprove</Button>
                                            <Button onClick={e => { rejectFormFiled({ firstNameStatus: existingForm.firstNameStatus, statusName: 'firstNameStatus' }) }} size="small" variant="contained" color="primary" > Reject</Button>
                                        </div>
                                        : ''
                                }
                                <label><b>Status :</b> {existingForm.firstNameStatus}</label>
                            </div>
                            <div className="col-md-4">
                                <p>Last Name</p>

                                <TextField
                                    disabled
                                    value={existingForm.lastName}
                                    // label="Last Name"
                                    fullWidth
                                />
                                {

                                    existingForm.lastNameStatus === 'pending' || existingForm.lastNameStatus === 'updated' ?
                                        <div>
                                            <Button onClick={e => { acceptFormFiled({ lastNameStatus: existingForm.lastNameStatus, statusName: 'lastNameStatus' }) }} size="small" variant="outlined" color="secondary" > Aprove</Button>
                                            <Button onClick={e => { rejectFormFiled({ lastNameStatus: existingForm.lastNameStatus, statusName: 'lastNameStatus' }) }} size="small" variant="contained" color="primary" > Reject</Button>
                                        </div>
                                        : ''
                                }
                                <label><b>Status :</b> {existingForm.lastNameStatus}</label>
                            </div>
                            <div className="col-md-4">
                                <p> Date of Birth</p>
                                <TextField
                                    disabled
                                    value={existingForm.dateOfBirth}
                                    // label="Date of Birth"
                                    fullWidth
                                />
                                {

                                    existingForm.dateOfBirthStatus === 'pending' || existingForm.dateOfBirthStatus === 'updated' ?
                                        <div>
                                            <Button onClick={e => { acceptFormFiled({ dateOfBirthStatus: existingForm.dateOfBirthStatus, statusName: 'dateOfBirthStatus' }) }} size="small" variant="outlined" color="secondary" > Aprove</Button>
                                            <Button onClick={e => { rejectFormFiled({ dateOfBirthStatus: existingForm.dateOfBirthStatus, statusName: 'dateOfBirthStatus' }) }} size="small" variant="contained" color="primary" > Reject</Button>
                                        </div>
                                        : ''
                                }
                                <label><b>Status :</b> {existingForm.dateOfBirthStatus}</label>
                            </div>
                            <div className="col-md-4">
                                <p>City of Birth</p>
                                <TextField
                                    disabled
                                    value={existingForm.cityOfBirth}
                                    // label="City of Birth"
                                    fullWidth
                                />
                                {

                                    existingForm.cityOfBirthStatus === 'pending' || existingForm.cityOfBirthStatus === 'updated' ?
                                        <div>
                                            <Button onClick={e => { acceptFormFiled({ cityOfBirthStatus: existingForm.cityOfBirthStatus, statusName: 'cityOfBirthStatus' }) }} size="small" variant="outlined" color="secondary" > Aprove</Button>
                                            <Button onClick={e => { rejectFormFiled({ cityOfBirthStatus: existingForm.cityOfBirthStatus, statusName: 'cityOfBirthStatus' }) }} size="small" variant="contained" color="primary" > Reject</Button>
                                        </div>
                                        : ''
                                }
                                <label><b>Status :</b> {existingForm.cityOfBirthStatus}</label>
                            </div>
                            <div className="col-md-4">
                                <p>Citizenship</p>
                                <TextField
                                    disabled
                                    value={existingForm.citizenship}
                                    // label="Citizenship "
                                    fullWidth
                                />
                                {

                                    existingForm.citizenshipStatus === 'pending' || existingForm.citizenshipStatus === 'updated' ?
                                        <div>
                                            <Button onClick={e => { acceptFormFiled({ citizenshipStatus: existingForm.citizenshipStatus, statusName: 'citizenshipStatus' }) }} size="small" variant="outlined" color="secondary" > Aprove</Button>
                                            <Button onClick={e => { rejectFormFiled({ citizenshipStatus: existingForm.citizenshipStatus, statusName: 'citizenshipStatus' }) }} size="small" variant="contained" color="primary" > Reject</Button>
                                        </div>
                                        : ''
                                }
                                <label><b>Status : </b> {existingForm.citizenshipStatus} </label>
                            </div>
                            <div className="col-md-4">
                                <p>Address</p>
                                <TextField
                                    disabled
                                    value={existingForm.address}
                                    // label="Address"
                                    fullWidth
                                />
                                {

                                    existingForm.addressStatus === 'pending' || existingForm.addressStatus === 'updated' ?
                                        <div>
                                            <Button onClick={e => { acceptFormFiled({ addressStatus: existingForm.addressStatus, statusName: 'addressStatus' }) }} size="small" variant="outlined" color="secondary" > Aprove</Button>
                                            <Button onClick={e => { rejectFormFiled({ addressStatus: existingForm.addressStatus, statusName: 'addressStatus' }) }} size="small" variant="contained" color="primary" > Reject</Button>
                                        </div>
                                        : ''
                                }
                                <label><b>Status :</b> {existingForm.addressStatus}</label>
                            </div>
                            <div className="col-md-4">
                                <p>Street Name</p>
                                <TextField
                                    disabled
                                    value={existingForm.streetName}
                                    // label="Street  Name"
                                    fullWidth
                                />
                                {

                                    existingForm.streetNameStatus === 'pending' || existingForm.streetNameStatus === 'updated' ?
                                        <div>
                                            <Button onClick={e => { acceptFormFiled({ streetNameStatus: existingForm.streetNameStatus, statusName: 'streetNameStatus' }) }} size="small" variant="outlined" color="secondary" > Aprove</Button>
                                            <Button onClick={e => { rejectFormFiled({ streetNameStatus: existingForm.streetNameStatus, statusName: 'streetNameStatus' }) }} size="small" variant="contained" color="primary" > Reject</Button>
                                        </div>
                                        : ''
                                }
                                <label><b>Status :</b> {existingForm.streetNameStatus}</label>
                            </div>
                            <div className="col-md-4">
                                <p>Post Code</p>
                                <TextField
                                    disabled
                                    value={existingForm.postCode}
                                    // label="Post Code"
                                    fullWidth
                                />
                                {

                                    existingForm.postCodeStatus === 'pending' || existingForm.postCodeStatus === 'updated' ?
                                        <div>
                                            <Button onClick={e => { acceptFormFiled({ postCodeStatus: existingForm.postCodeStatus, statusName: 'postCodeStatus' }) }} size="small" variant="outlined" color="secondary" > Aprove</Button>
                                            <Button onClick={e => { rejectFormFiled({ postCodeStatus: existingForm.postCodeStatus, statusName: 'postCodeStatus' }) }} size="small" variant="contained" color="primary" > Reject</Button>
                                        </div>
                                        : ''
                                }
                                <label><b>Status</b> {existingForm.postCodeStatus} </label>
                            </div>
                            <div className="col-md-4">
                                <p>City</p>
                                <TextField
                                    disabled
                                    value={existingForm.city}
                                    // label="City"
                                    fullWidth
                                />
                                {

                                    existingForm.cityStatus === 'pending' || existingForm.cityStatus === 'updated' ?
                                        <div>
                                            <Button onClick={e => { acceptFormFiled({ cityStatus: existingForm.cityStatus, statusName: 'cityStatus' }) }} size="small" variant="outlined" color="secondary" > Aprove</Button>
                                            <Button onClick={e => { rejectFormFiled({ cityStatus: existingForm.cityStatus, statusName: 'cityStatus' }) }} size="small" variant="contained" color="primary" > Reject</Button>
                                        </div>
                                        : ''
                                }
                                <label><b>Status :</b> {existingForm.cityStatus}</label>
                            </div>
                            <div className="col-md-4">
                                <p>Residendy</p>
                                <TextField
                                    disabled
                                    value={existingForm.residendy}
                                    // label="Residendy"
                                    fullWidth
                                />
                                {
                                    existingForm.residendyStatus === 'pending' || existingForm.residendyStatus === 'updated' ?
                                        <div>
                                            <Button onClick={e => { acceptFormFiled({ residendyStatus: existingForm.residendyStatus, statusName: 'residendyStatus' }) }} size="small" variant="outlined" color="secondary" > Aprove</Button>
                                            <Button onClick={e => { rejectFormFiled({ residendyStatus: existingForm.residendyStatus, statusName: 'residendyStatus' }) }} size="small" variant="contained" color="primary" > Reject</Button>
                                        </div>
                                        : ''
                                }
                                <label><b>Status :</b> {existingForm.residendyStatus}</label>
                            </div>
                        </div>


                        <hr />
                        <div className="row">
                            <div className="col-md-6">
                                {/* <p>ID Front</p> */}
                                {
                                    existingForm.IDFront ?
                                        <div>
                                            {
                                                existingForm.IDFrontStatus === 'rejected' ?
                                                    <input
                                                        disabled
                                                        // value={existingForm.IDFront}
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
                                {

                                    existingForm.IDFrontStatus === 'pending' || existingForm.IDFrontStatus === 'updated' ?
                                        <div>
                                            <Button onClick={e => { acceptFormFiled({ IDFrontStatus: existingForm.IDFrontStatus, statusName: 'IDFrontStatus' }) }} size="small" variant="outlined" color="secondary" > Aprove</Button>
                                            <Button onClick={e => { rejectFormFiled({ IDFrontStatus: existingForm.IDFrontStatus, statusName: 'IDFrontStatus' }) }} size="small" variant="contained" color="primary" > Reject</Button>
                                        </div>
                                        : ''
                                }
                                <label><b>Status : </b> {existingForm.IDFrontStatus} </label>
                            </div>
                            <div className="col-md-6">
                                {/* <p>ID Back</p> */}
                                {
                                    existingForm.IDBack ?
                                        <div>
                                            {
                                                existingForm.IDBackStatus === 'rejected' ?
                                                    <input
                                                        disabled
                                                        // value={existingForm.IDBack}
                                                        className="form-control"
                                                        // label="ID Back"
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
                                {

                                    existingForm.IDBackStatus === 'pending' || existingForm.IDBackStatus === 'updated' ?
                                        <div>
                                            <Button onClick={e => { acceptFormFiled({ IDBackStatus: existingForm.IDBackStatus, statusName: 'IDBackStatus' }) }} size="small" variant="outlined" color="secondary" > Aprove</Button>
                                            <Button onClick={e => { rejectFormFiled({ IDBackStatus: existingForm.IDBackStatus, statusName: 'IDBackStatus' }) }} size="small" variant="contained" color="primary" > Reject</Button>
                                        </div>
                                        : ''
                                }
                                <label><b>Status : </b> {existingForm.IDBackStatus} </label>
                            </div>
                            <div className="col-md-6">
                                {/* <p>Address Proof</p> */}
                                {
                                    existingForm.addressProof ?
                                        <div>
                                            {
                                                existingForm.addressProofStatus === 'rejected' ?
                                                    <input
                                                        disabled
                                                        // value={existingForm.addressProof}
                                                        accept=" application/pdf, image/*"
                                                        // label="Address Proof"
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
                                {

                                    existingForm.addressProofStatus === 'pending' || existingForm.addressProofStatus === 'updated' ?
                                        <div>
                                            <Button onClick={e => { acceptFormFiled({ addressProofStatus: existingForm.addressProofStatus, statusName: 'addressProofStatus' }) }} size="small" variant="outlined" color="secondary" > Aprove</Button>
                                            <Button onClick={e => { rejectFormFiled({ addressProofStatus: existingForm.addressProofStatus, statusName: 'addressProofStatus' }) }} size="small" variant="contained" color="primary" > Reject</Button>
                                        </div>
                                        : ''
                                }
                                <label><b>Status : </b> {existingForm.addressProofStatus} </label>

                            </div>
                            <div className="col-md-6">
                                {/* <p>Selfie Verification</p> */}
                                {
                                    existingForm.selfieVerification ?
                                        <div>
                                            {
                                                existingForm.selfieVerificationStatus === 'rejected' ?
                                                    <input
                                                        disabled
                                                        // value={existingForm.selfieVerification}
                                                        accept=" application/pdf, image/*"
                                                        type="file"
                                                        // label="Selfie Verification "
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
                                {

                                    existingForm.selfieVerificationStatus === 'pending' || existingForm.selfieVerificationStatus === 'updated' ?
                                        <div>
                                            <Button onClick={e => { acceptFormFiled({ selfieVerificationStatus: existingForm.selfieVerificationStatus, statusName: 'selfieVerificationStatus' }) }} size="small" variant="outlined" color="secondary" > Aprove</Button>
                                            <Button onClick={e => { acceptFormFiled({ rejectieVerificationStatus: existingForm.selfieVerificationStatus, statusName: 'selfieVerificationStatus' }) }} size="small" variant="contained" color="primary" > Reject</Button>
                                        </div>
                                        : ''
                                }
                                <label><b>Status : </b> {existingForm.selfieVerificationStatus} </label>

                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-md-6">
                                {/* <p>Bank Statement </p> */}
                                {
                                    existingForm.bankStatement ?
                                        <div>
                                            {
                                                existingForm.bankStatementStatus === 'rejected' ?

                                                    <input
                                                        disabled
                                                        // value={existingForm.bankStatement}
                                                        // label="Bank Statement "
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
                                {

                                    existingForm.bankStatementStatus === 'pending' || existingForm.bankStatementStatus === 'updated' ?
                                        <div>
                                            <Button onClick={e => { acceptFormFiled({ bankStatementStatus: existingForm.bankStatementStatus, statusName: 'bankStatementStatus' }) }} size="small" variant="outlined" color="secondary" > Aprove</Button>
                                            <Button onClick={e => { rejectFormFiled({ bankStatementStatus: existingForm.bankStatementStatus, statusName: 'bankStatementStatus' }) }} size="small" variant="contained" color="primary" > Reject</Button>
                                        </div>
                                        : ''
                                }
                                <label><b>Status : </b> {existingForm.bankStatementStatus} </label>

                            </div>
                            <div className="col-md-6">
                                <p>Origin of Founds</p>
                                <TextField
                                    disabled
                                    value={existingForm.originOfFounds}
                                    // label="Origin  of Funds"
                                    fullWidth
                                />
                                {

                                    existingForm.originOfFoundsStatus === 'pending' || existingForm.originOfFoundsStatus === 'updated' ?
                                        <div>
                                            <Button onClick={e => { acceptFormFiled({ originOfFoundsStatus: existingForm.originOfFoundsStatus, statusName: 'originOfFoundsStatus' }) }} size="small" variant="outlined" color="secondary" > Aprove</Button>
                                            <Button onClick={e => { rejectFormFiled({ originOfFoundsStatus: existingForm.originOfFoundsStatus, statusName: 'originOfFoundsStatus' }) }} size="small" variant="contained" color="primary" > Reject</Button>
                                        </div>
                                        : ''
                                }
                                <label><b>Status :</b> {existingForm.originOfFoundsStatus}</label>
                            </div>
                            <div className="col-md-12">
                                <p>Funds Origin Explanation</p>
                                <TextField
                                    disabled
                                    value={existingForm.foundsOriginExplanation}
                                    // label="Funds origin explanation"
                                    fullWidth
                                    rows="3"
                                />
                                {

                                    existingForm.foundsOriginExplanationStatus === 'pending' || existingForm.foundsOriginExplanationStatus === 'updated' ?
                                        <div>
                                            <Button onClick={e => { acceptFormFiled({ foundsOriginExplanationStatus: existingForm.foundsOriginExplanationStatus, statusName: 'foundsOriginExplanationStatus' }) }} size="small" variant="outlined" color="secondary" > Aprove</Button>
                                            <Button onClick={e => { acceptFormFiled({ rejectdsOriginExplanationStatus: existingForm.foundsOriginExplanationStatus, statusName: 'foundsOriginExplanationStatus' }) }} size="small" variant="contained" color="primary" > Reject</Button>
                                        </div>
                                        : ''
                                }
                                <label><b>Status :</b> {existingForm.foundsOriginExplanationStatus}</label>
                            </div>
                        </div>
                        {/* <div className="text-right pt-4">
                            <Button color="secondary" type="submit" variant="contained" size="small"  >Update  Verification</Button>
                        </div> */}
                    </form>

                </CardContent>
            </Card>
        </div>
    )
}
const mapStateToProps = state => ({
    auth: state.auth
})
export default connect(mapStateToProps, null)(FormDetails)
