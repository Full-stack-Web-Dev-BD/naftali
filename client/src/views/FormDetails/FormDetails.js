import { Button, Card, CardContent, TextField } from '@material-ui/core'
import Axios from 'axios'
import React, { useState } from 'react'
import qs from 'query-string'
const FormDetails = () => {
    const [existingForm, setExistingForm] = useState({})
    useState(() => {
        let url = qs.parse(window.location.search)
        Axios.get(`/api/form/getSingleForm/${url.formid}`)
            .then(res => {
                setExistingForm(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    const detectExtension = (fileName) => {
        let ext = fileName.split('.')[1]
        return ext
    }
    const acceptFormFiled =(status)=>{
        console.log(status);
    }
    return (
        <div className="col-md-8 offset-md-2 mt-5">
            <Card>
                <CardContent>

                    <form className="text-left">
                        <h4 className="text-center"> Submitted  Form </h4>
                        <div className="row text-left">
                            <div className="col-md-4">
                                <TextField
                                    disabled
                                    value={existingForm.firstName}
                                    // label="First Name"
                                    fullWidth
                                />
                                {
                                    existingForm.firstNameStatus === 'pending' ?
                                        <Button onClick={e=>{acceptFormFiled({firstNameStatus:existingForm.firstNameStatus})}} size="small" variant="outlined" color="secondary" > Aprove</Button>
                                        : ''
                                }
                                <label><b>Status :</b> {existingForm.firstNameStatus}</label>
                            </div>
                            <div className="col-md-4">
                                <TextField
                                    disabled
                                    value={existingForm.lastName}
                                    // label="Last Name"
                                    fullWidth
                                />
                                {

                                    existingForm.lastNameStatus === 'pending' ?
                                        <Button onClick={e=>{acceptFormFiled({lastNameStatus:existingForm.lastNameStatus})}} size="small" variant="outlined" color="secondary" > Aprove</Button>
                                        : ''
                                }
                                <label><b>Status :</b> {existingForm.lastNameStatus}</label>
                            </div>
                            <div className="col-md-4">
                                <TextField
                                    disabled
                                    value={existingForm.dateOfBirth}
                                    // label="Date of Birth"
                                    fullWidth
                                />
                                {

                                    existingForm.firstNameStatus === 'pending' ?
                                        <Button onClick={e=>{acceptFormFiled({firstNameStatus:existingForm.firstNameStatus})}} size="small" variant="outlined" color="secondary" > Aprove</Button>
                                        : ''
                                }
                                <label><b>Status :</b> {existingForm.dateOfBirthStatus}</label>
                            </div>
                            <div className="col-md-4">
                                <TextField
                                    disabled
                                    value={existingForm.cityOfBirth}
                                    // label="City of Birth"
                                    fullWidth
                                />
                                {

                                    existingForm.cityOfBirthStatus === 'pending' ?
                                        <Button onClick={e=>{acceptFormFiled({cityOfBirthStatus:existingForm.cityOfBirthStatus})}} size="small" variant="outlined" color="secondary" > Aprove</Button>
                                        : ''
                                }
                                <label><b>Status :</b> {existingForm.cityOfBirthStatus}</label>
                            </div>
                            <div className="col-md-4">
                                <TextField
                                    disabled
                                    value={existingForm.citizenship}
                                    // label="Citizenship "
                                    fullWidth
                                />
                                {

                                    existingForm.citizenshipStatus === 'pending' ?
                                        <Button onClick={e=>{acceptFormFiled({citizenshipStatus:existingForm.citizenshipStatus})}} size="small" variant="outlined" color="secondary" > Aprove</Button>
                                        : ''
                                }
                                <label><b>Status : </b> {existingForm.citizenshipStatus} </label>
                            </div>
                            <div className="col-md-4">
                                <TextField
                                    disabled
                                    value={existingForm.address}
                                    // label="Address"
                                    fullWidth
                                />
                                {

                                    existingForm.addressStatus === 'pending' ?
                                        <Button onClick={e=>{acceptFormFiled({addressStatus:existingForm.addressStatus})}} size="small" variant="outlined" color="secondary" > Aprove</Button>
                                        : ''
                                }
                                <label><b>Status :</b> {existingForm.addressStatus}</label>
                            </div>
                            <div className="col-md-4">
                                <TextField
                                    disabled
                                    value={existingForm.streetName}
                                    // label="Street  Name"
                                    fullWidth
                                />
                                {

                                    existingForm.streetNameStatus === 'pending' ?
                                        <Button onClick={e=>{acceptFormFiled({streetNameStatus:existingForm.streetNameStatus})}} size="small" variant="outlined" color="secondary" > Aprove</Button>
                                        : ''
                                }
                                <label><b>Status :</b> {existingForm.streetNameStatus}</label>
                            </div>
                            <div className="col-md-4">
                                <TextField
                                    disabled
                                    value={existingForm.postCode}
                                    // label="Post Code"
                                    fullWidth
                                />
                                {

                                    existingForm.postCodeStatus === 'pending' ?
                                        <Button onClick={e=>{acceptFormFiled({postCodeStatus:existingForm.postCodeStatus})}} size="small" variant="outlined" color="secondary" > Aprove</Button>
                                        : ''
                                }
                                <label><b>Status</b> {existingForm.postCodeStatus} </label>
                            </div>
                            <div className="col-md-4">
                                <TextField
                                    disabled
                                    value={existingForm.city}
                                    // label="City"
                                    fullWidth
                                />
                                {

                                    existingForm.postCodeStatus === 'pending' ?
                                        <Button onClick={e=>{acceptFormFiled({postCodeStatus:existingForm.postCodeStatus})}} size="small" variant="outlined" color="secondary" > Aprove</Button>
                                        : ''
                                }
                                <label><b>Status :</b> {existingForm.cityStatus}</label>
                            </div>
                            <div className="col-md-4">
                                <TextField
                                    disabled
                                    value={existingForm.residendy}
                                    // label="Residendy"
                                    fullWidth
                                />
                                {
                                    existingForm.residendyStatus === 'pending' ?
                                        <Button onClick={e=>{acceptFormFiled({residendyStatus:existingForm.residendyStatus})}} size="small" variant="outlined" color="secondary" > Aprove</Button>
                                        : ''
                                }
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

                                    existingForm.IDFrontStatus === 'pending' ?
                                        <Button onClick={e=>{acceptFormFiled({IDFrontStatus:existingForm.IDFrontStatus})}} size="small" variant="outlined" color="secondary" > Aprove</Button>
                                        : ''
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

                                    existingForm.IDBackStatus === 'pending' ?
                                        <Button onClick={e=>{acceptFormFiled({IDBackStatus:existingForm.IDBackStatus})}} size="small" variant="outlined" color="secondary" > Aprove</Button>
                                        : ''
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

                                    existingForm.addressProofStatus === 'pending' ?
                                        <Button onClick={e=>{acceptFormFiled({addressProofStatus:existingForm.addressProofStatus})}} size="small" variant="outlined" color="secondary" > Aprove</Button>
                                        : ''
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

                                    existingForm.selfieVerificationStatus === 'pending' ?
                                        <Button onClick={e=>{acceptFormFiled({selfieVerificationStatus:existingForm.selfieVerificationStatus})}} size="small" variant="outlined" color="secondary" > Aprove</Button>
                                        : ''
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

                                    existingForm.bankStatementStatus === 'pending' ?
                                        <Button onClick={e=>{acceptFormFiled({bankStatementStatus:existingForm.bankStatementStatus})}} size="small" variant="outlined" color="secondary" > Aprove</Button>
                                        : ''
                                }
                                <label><b>Status : </b> {existingForm.bankStatementStatus} </label>

                            </div>
                            <div className="col-md-6">
                                <TextField
                                    disabled
                                    value={existingForm.originOfFounds}
                                    // label="Origin  of Funds"
                                    fullWidth
                                />
                                {

                                    existingForm.originOfFoundsStatus === 'pending' ?
                                        <Button onClick={e=>{acceptFormFiled({originOfFoundsStatus:existingForm.originOfFoundsStatus})}} size="small" variant="outlined" color="secondary" > Aprove</Button>
                                        : ''
                                }
                                <label><b>Status :</b> {existingForm.originOfFoundsStatus}</label>
                            </div>
                            <div className="col-md-12">
                                <TextField
                                    disabled
                                    value={existingForm.foundsOriginExplanationStatus}
                                    // label="Funds origin explanation"
                                    fullWidth
                                    rows="3"
                                />
                                {

                                    existingForm.foundsOriginExplanationStatus === 'pending' ?
                                        <Button onClick={e=>{acceptFormFiled({foundsOriginExplanationStatus:existingForm.foundsOriginExplanationStatus})}} size="small" variant="outlined" color="secondary" > Aprove</Button>
                                        : ''
                                }
                                <label><b>Status :</b> {existingForm.foundsOriginExplanationStatus}</label>
                            </div>
                        </div>
                        <div className="text-right pt-4">
                            <Button color="secondary" type="submit" variant="contained" size="small"  >Update  Verification</Button>
                        </div>
                    </form>

                </CardContent>
            </Card>
        </div>
    )
}

export default FormDetails
