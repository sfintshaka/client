const Apply = () => {
    return (
        <div className="container mx-auto p-8 max-w-xl">
            <h2 className="text-3xl font-bold mb-8">Student Accommodation Application Form</h2>

            <form action="/Sucesss.tsx" method="post" className="space-y-4">
            <input type="hidden" name="form-name" value="fileForm"/>
                {/* Personal Information */}
                <div className="mb-4">
                    <label htmlFor="fullName" className="block">Full Name</label>
                    <input type="text" id="fullName" name="fullName" className="w-full p-2 border rounded" required />
                </div>

                <div className="mb-4">
                    <label htmlFor="dob" className="block">Date of Birth</label>
                    <input type="date" id="dob" name="dob" className="w-full p-2 border rounded" required />
                </div>

                <div className="mb-4">
                    <label htmlFor="gender" className="block">Gender</label>
                    <select id="gender" name="gender" className="w-full p-2 border rounded" required>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="female">Prefer not to say</option>
                        <option value="female">Other</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label htmlFor="nationality" className="block">Nationality</label>
                    <input type="text" id="nationality" name="nationality" className="w-full p-2 border rounded" required />
                </div>

                {/* Contact Information */}
                <div className="mb-4">
                    <label htmlFor="phoneNumber" className="block">Phone Number</label>
                    <input type="tel" id="phoneNumber" name="phoneNumber" className="w-full p-2 border rounded" required />
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="block">Email Address</label>
                    <input type="email" id="email" name="email" className="w-full p-2 border rounded" required />
                </div>

                <div className="mb-4">
                    <label htmlFor="permanentAddress" className="block">Permanent Address</label>
                    <textarea id="permanentAddress" name="permanentAddress" rows={4} className="w-full p-2 border rounded" required></textarea>
                </div>

                <div className="mb-4">
                    <label htmlFor="emergencyContact" className="block">Emergency Contact Information</label>
                    <textarea id="emergencyContact" name="emergencyContact" rows={4} className="w-full p-2 border rounded" required></textarea>
                </div>

                {/* Academic Information */}
                <div className="mb-4">
                    <label htmlFor="university" className="block">University/College Name</label>
                    <input type="text" id="university" name="university" className="w-full p-2 border rounded" required />
                </div>

                <div className="mb-4">
                    <label htmlFor="program" className="block">Program of Study</label>
                    <input type="text" id="program" name="program" className="w-full p-2 border rounded" required />
                </div>

                <div className="mb-4">
                    <label htmlFor="studentID" className="block">Student ID</label>
                    <input type="text" id="studentID" name="studentID" className="w-full p-2 border rounded" required />
                </div>

                {/* Accommodation Preferences */}
                <div className="mb-4">
                    <label htmlFor="roomType" className="block">Room Type</label>
                    <select id="roomType" name="roomType" className="w-full p-2 border rounded" required>
                        <option value="single">Single</option>
                        <option value="double">Sharing</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label htmlFor="leaseDuration" className="block">Lease Duration</label>
                    <input type="text" id="leaseDuration" name="leaseDuration" className="w-full p-2 border rounded" required />
                </div>

                {/* Financial Information */}
                <div className="mb-4">
                    <label htmlFor="paymentPlan" className="block">Payment Plan</label>
                    <input type="text" id="paymentPlan" name="paymentPlan" className="w-full p-2 border rounded" required />
                </div>

                <div className="mb-4">
                    <label htmlFor="financialAid" className="block">Financial Aid or Scholarship Information</label>
                    <textarea id="financialAid" name="financialAid" rows={4} className="w-full p-2 border rounded"></textarea>
                </div>


              
                {/* Health and Safety */}
                <div className="mb-4">
                    <label htmlFor="medicalConditions" className="block">Medical Conditions or Allergies:</label>
                    <textarea id="medicalConditions" name="medicalConditions" rows={4} className="w-full p-2 border rounded"></textarea>
                </div>

                <div className="mb-4">
                    <label htmlFor="emergencyMedicalContact" className="block">Emergency Medical Contact Information</label>
                    <textarea id="emergencyMedicalContact" name="emergencyMedicalContact" rows={4} className="w-full p-2 border rounded"></textarea>
                </div>

                <div className="mb-4">
                    <label htmlFor="insuranceInformation" className="block">Insurance Information</label>
                    <textarea id="insuranceInformation" name="insuranceInformation" rows={4} className="w-full p-2 border rounded"></textarea>
                </div>

              
                {/* Documents Upload */}
                <div className="mb-4">
                    <label htmlFor="idDocuments" className="block">Identification Documents (e.g., Passport, ID)</label>
                    <input type="file" id="idDocuments" name="file" className="w-full p-2 border rounded" />
                </div>

                <div className="mb-4">
                    <label htmlFor="proofOfEnrollment" className="block">Proof of Enrollment/Acceptance letter</label>
                    <input type="file" id="proofOfEnrollment" name="file" className="w-full p-2 border rounded" />
                </div>

               

                {/* Additional Comments or Requests */}
                <div className="mb-4">
                    <label htmlFor="additionalComments" className="block">Additional Comments or Requests</label>
                    <textarea id="additionalComments" name="additionalComments" rows={4} className="w-full p-2 border rounded"></textarea>
                </div>

                {/* Digital Signature */}
                <div className="mb-4">
                    <label htmlFor="digitalSignature" className="block">Digital Signature</label>
                    <input type="text" id="digitalSignature" name="digitalSignature" className="w-full p-2 border rounded" required />
                </div>

                {/* Submit Button */}
                <button type="submit" className="bg-green-500 text-white p-2 rounded hover:bg-green-600">Submit Application</button>
            </form>
        </div>
    );
};

export default Apply;
