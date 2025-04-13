import React, { useState, useContext, useEffect } from 'react';
import profileimage from '../../image/profileimage.svg';
import { ProfileContext } from '@/assets/contextAPI/ProfileContext';

function ProfileMain() {
    const { user, loading, editCurrentUser, getCurrentUser } = useContext(ProfileContext);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [otherName, setOtherName] = useState(''); // Corrected from otherNames
    const [headline, setHeadline] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [bio, setBio] = useState('');
    const [language, setLanguage] = useState('');
    const [country, setCountry] = useState('');
    const [website, setWebsite] = useState('');
    const [facebook, setFacebook] = useState('');
    const [linkedin, setLinkedin] = useState('');
    const [youtube, setYoutube] = useState('');
    const [instagram, setInstagram] = useState('');
    const [profileImageFile, setProfileImageFile] = useState(null); // To store the selected file
    const [profileImageUrl, setProfileImageUrl] = useState(null); // To preview the selected image

    useEffect(() => {
        const fetchUserData = async () => {
            if (user) {
                setFirstName(user.firstName || '');
                setLastName(user.lastName || '');
                setOtherName(user.otherName || '');
                setHeadline(user.headline || '');
                setEmail(user.email || '');
                setPhoneNumber(user.phoneNumber || '');
                setBio(user.bio || '');
                setLanguage(user.language || '');
                setCountry(user.country || '');
                setWebsite(user.socialLinks?.website || '');
                setFacebook(user.socialLinks?.facebook || '');
                setLinkedin(user.socialLinks?.linkedin || '');
                setYoutube(user.socialLinks?.youtube || '');
                setInstagram(user.socialLinks?.instagram || '');
                setProfileImageUrl(user.profileImage || profileimage); // Set initial preview
            } else {
                await getCurrentUser();
            }
        };

        fetchUserData();
    }, [user, getCurrentUser]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'firstName':
                setFirstName(value);
                break;
            case 'lastName':
                setLastName(value);
                break;
            case 'otherName': // Corrected to otherName
                setOtherName(value);
                break;
            case 'headline':
                setHeadline(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'phoneNumber':
                setPhoneNumber(value);
                break;
            case 'bio':
                setBio(value);
                break;
            case 'language':
                setLanguage(value);
                break;
            case 'country':
                setCountry(value);
                break;
            case 'website':
                setWebsite(value);
                break;
            case 'facebook':
                setFacebook(value);
                break;
            case 'linkedin':
                setLinkedin(value);
                break;
            case 'youtube':
                setYoutube(value);
                break;
            case 'instagram':
                setInstagram(value);
                break;
            default:
                break;
        }
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setProfileImageFile(file);
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImageUrl(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            setProfileImageUrl(user?.profileImage || profileimage); // Reset preview if no file
        }
    };

    const handleEditProfile = async (e) => {
        e.preventDefault(); // Prevent the default form submission

        try {
            const formData = new FormData();
            formData.append('firstName', firstName);
            formData.append('lastName', lastName);
            formData.append('otherName', otherName); // Corrected to otherName
            formData.append('headline', headline);
            formData.append('email', email);
            formData.append('phoneNumber', phoneNumber);
            formData.append('bio', bio);
            formData.append('language', language);
            formData.append('country', country);
            formData.append('socialLinks[website]', website); 
            formData.append('socialLinks[facebook]', facebook);
            formData.append('socialLinks[linkedin]', linkedin);
            formData.append('socialLinks[youtube]', youtube);
            formData.append('socialLinks[instagram]', instagram);

            if (profileImageFile) {
                formData.append('profileImage', profileImageFile); 
            }

            const data = await editCurrentUser(formData);
            console.log(data);
            alert('Profile updated successfully!');
            await getCurrentUser(); // Refresh user data in context
        } catch (error) {
            alert(error.message || 'Failed to update profile.');
        }
    };

    if (loading && !user) {
        return <div>Loading profile data...</div>;
    }

    if (!user) {
        return <div>No user data available.</div>; // Or handle this case appropriately
    }

  return (
    <>
    <form onSubmit={handleEditProfile}>
        <div className="w-full bg-white rounded-2xl border-solid border-grey-border border relative overflow-hidden mb-5">
            <div className="w-full px-2 py-4 flex flex-col gap-4 items-start justify-start">
                {/* First and last name */}
                <div className="w-full flex flex-col gap-3 md:gap-3 md:flex-row items-center justify-between shrink-0 relative px-2">
                    <div className="w-full md:w-[48%] flex flex-col gap-1.5 items-start justify-start shrink-0 relative">
                        <div className="text-grey-900 text-left font-small-text-font-family text-small-text-font-size leading-small-text-line-height font-small-text-font-weight relative">
                        First Name
                        </div>
                        <input type='text' name='firstName' value={firstName} onChange={handleInputChange} placeholder='Enter First Name' className="bg-white rounded-lg border-solid border-grey-border border p-4 flex flex-row gap-2 items-center justify-start shrink-0 w-full relative" required/>
                    </div>
                    <div className="w-full md:w-[48%] flex flex-col gap-1.5 items-start justify-start shrink-0 relative">
                        <div className="text-grey-900 text-left font-small-text-font-family text-small-text-font-size leading-small-text-line-height font-small-text-font-weight relative">
                        Last Name
                        </div>
                        <input type='text' name='lastName' value={lastName} onChange={handleInputChange} placeholder='Enter Last Name' className="bg-white rounded-lg border-solid border-grey-border border p-4 flex flex-row gap-2 items-center justify-start shrink-0 w-full relative" />
                    </div>
                </div>

                <div className="w-full flex flex-col gap-3 md:gap-3 md:flex-row items-center justify-between shrink-0 relative px-2">
                    {/* Other Names */}
                    <div className="w-full md:w-[48%] flex flex-col gap-1.5 items-start justify-start shrink-0 relative px-2">
                        <div className="text-grey-900 text-left font-small-text-font-family text-small-text-font-size leading-small-text-line-height font-small-text-font-weight relative">
                            Other Names
                        </div>
                        <input type='text' name='otherName' value={otherName} onChange={handleInputChange} placeholder='Enter Other names' className="bg-white rounded-lg border-solid border-grey-border border p-4 flex flex-row gap-2 items-center justify-start shrink-0 w-full relative" />
                    </div>

                    {/* Headline */}
                    <div className="w-full md:w-[48%] flex flex-col gap-1.5 items-start justify-start shrink-0 relative px-2">
                        <div className="text-grey-900 text-left font-small-text-font-family text-small-text-font-size leading-small-text-line-height font-small-text-font-weight relative">
                            Headline
                        </div>
                        <input type='text' name='headline' value={headline} onChange={handleInputChange} placeholder='Enter Headline' className="bg-white rounded-lg border-solid border-grey-border border p-4 flex flex-row gap-2 items-center justify-start shrink-0 w-full relative" />
                    </div>
                </div>

                <div className="w-full flex flex-col gap-3 md:gap-3 md:flex-row items-center justify-between shrink-0 relative px-2">
                    {/* Email */}
                    <div className="w-full md:w-[48%] flex flex-col gap-1.5 items-start justify-start shrink-0 relative px-2">
                        <div className="text-grey-900 text-left font-small-text-font-family text-small-text-font-size leading-small-text-line-height font-small-text-font-weight relative">
                           Email
                        </div>
                        <input type='email' name='email' value={email} onChange={handleInputChange} placeholder='Enter email' className="bg-white rounded-lg border-solid border-grey-border border p-4 flex flex-row gap-2 items-center justify-start shrink-0 w-full relative" />
                    </div>
                </div>

                <div className="w-full flex flex-col gap-3 md:gap-3 md:flex-row items-start justify-between shrink-0 relative px-2">
                    {/* phone number */}
                    <div className="w-full md:w-[48%] flex flex-col gap-1.5 items-start justify-start shrink-0 relative px-2">
                        <div className="text-grey-900 text-left font-small-text-font-family text-small-text-font-size leading-small-text-line-height font-small-text-font-weight relative">
                            Phone Number
                        </div>
                        <input type='text' name='phoneNumber' value={phoneNumber} onChange={handleInputChange} placeholder='Enter phone number' className="bg-white rounded-lg border-solid border-grey-border border p-4 flex flex-row gap-2 items-center justify-start shrink-0 w-full relative" />
                    </div>

                    {/* Description */}
                    <div className="w-full md:w-[48%] flex flex-col gap-1.5 items-start justify-start shrink-0 relative px-2">
                        <div className="text-grey-900 text-left font-small-text-font-family text-small-text-font-size leading-small-text-line-height font-small-text-font-weight relative" >
                            Bio
                        </div>
                        <textarea placeholder='Enter description' name='bio' value={bio} onChange={handleInputChange}  className='bg-white rounded-lg border-solid border-grey-border border p-4 flex flex-row gap-2 items-start justify-start shrink-0 w-full h-[120px] relative'></textarea>
                    </div>
                </div>

                {/* Country and Language */}
                <div className="w-full flex flex-col gap-3 md:gap-3 md:flex-row items-start justify-between shrink-0 relative px-2">
                    <div className="w-full md:w-[48%] flex flex-col gap-1.5 items-start justify-start shrink-0 relative px-2">
                        <div className="text-grey-900 text-left font-small-text-font-family text-small-text-font-size leading-small-text-line-height font-small-text-font-weight relative">
                            Language
                        </div>
                        <select name='language' value={language} onChange={handleInputChange} className="bg-white rounded-lg border-solid border-grey-border border p-4 flex flex-row items-center justify-between shrink-0 w-full relative">
                            <option value="">Choose Language</option>
                            <option value="English">English</option>
                            <option value="French">French</option>
                        </select>
                    </div>
                    <div className="w-full md:w-[48%] flex flex-col gap-1.5 items-start justify-start shrink-0 relative px-2">
                        <div className="text-grey-900 text-left font-small-text-font-family text-small-text-font-size leading-small-text-line-height font-small-text-font-weight relative">
                            Country
                        </div>
                        <select name='country' value={country} onChange={handleInputChange} className="bg-white rounded-lg border-solid border-grey-border border p-4 flex flex-row items-center justify-between shrink-0 w-full relative">
                            <option value="">Choose Country</option>
                            <option value="Nigeria">Nigeria</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>
                </div>

            </div>
        </div>

        {/* Image section */}
        <div className="flex flex-col gap-3 bg-white rounded-2xl border-solid border-grey-border border relative overflow-hidden px-4 py-3 mb-5">
            <div className="text-grey-900 text-left font-heading-5-subheading-font-family text-[16px] lg:text-[18px] leading-heading-5-subheading-line-height font-thin lg:font-[600]">
                Image Preview
            </div>
            <div className="bg-grey-border rounded-lg flex flex-row items-center justify-center w-[60%] lg:w-[392.48px] h-[140px] p-4 mx-auto lg:mx-0">
                <img
                className="w-[100px] h-[100px] rounded-[50%]"
                src={profileImageUrl || profileimage}
                alt="Profile Preview" 
                onError={() => setProfileImageUrl(profileimage)}
                />
            </div>
            
            <div className="text-grey-900 text-left font-heading-5-subheading-font-family text-[16px] lg:text-[18px] leading-heading-5-subheading-line-height font-thin lg:font-[600]">
                Add/Change Image
            </div>
            <div className='flex flex-row gap-3 items-center justify-start'>
                <div className='w-[50%]'>
                    <input type='file' onChange={handleImageChange} className="bg-white rounded-lg border-solid border-grey-border border p-2 lg:p-4 flex flex-row gap-2 items-center justify-start w-full" />
                </div>
            </div>
        </div>


        {/* Links section */}
        <div className="bg-white rounded-2xl border-solid border-grey-border border h-[589px] relative overflow-hidden px-6 py-2 mb-4">
            <div className="text-grey-900 text-left font-heading-5-subheading-font-family text-heading-5-subheading-font-size leading-heading-5-subheading-line-height font-heading-5-subheading-font-weight">
                Links
            </div>
            <div className="flex flex-col gap-4 items-start justify-start ">
                <div className="w-full flex flex-col gap-[9px] items-start justify-start shrink-0 relative">
                    <div className="text-grey-900 text-left font-small-text-font-family text-small-text-font-size leading-small-text-line-height font-small-text-font-weight relative">
                        Website
                    </div>
                    <input type='text' name='website' value={website} onChange={handleInputChange} placeholder='Website' className="bg-white rounded-lg border-solid border-grey-border border p-4 flex flex-row gap-2 items-center justify-start shrink-0 w-full relative" /> 
                </div>
                <div className="w-full flex flex-col gap-[9px] items-start justify-start shrink-0 relative">
                    <div className="text-grey-900 text-left font-small-text-font-family text-small-text-font-size leading-small-text-line-height font-small-text-font-weight relative">
                        Facebook
                    </div>
                    <input type='text' name='facebook' value={facebook} onChange={handleInputChange} placeholder='Facebook' className="bg-white rounded-lg border-solid border-grey-border border p-4 flex flex-row gap-2 items-center justify-start shrink-0 w-full relative" /> 
                </div>
                <div className="w-full flex flex-col gap-[9px] items-start justify-start shrink-0 relative">
                    <div className="text-grey-900 text-left font-small-text-font-family text-small-text-font-size leading-small-text-line-height font-small-text-font-weight relative">
                        LinkedIn
                    </div>
                    <input type='text' name='linkedin' value={linkedin} onChange={handleInputChange} placeholder='LinkedIn' className="bg-white rounded-lg border-solid border-grey-border border p-4 flex flex-row gap-2 items-center justify-start shrink-0 w-full relative" /> 
                </div>
                <div className="w-full flex flex-col gap-[9px] items-start justify-start shrink-0 relative">
                    <div className="text-grey-900 text-left font-small-text-font-family text-small-text-font-size leading-small-text-line-height font-small-text-font-weight relative">
                        Youtube
                    </div>
                    <input type='text' name='youtube' value={youtube} onChange={handleInputChange} placeholder='Youtube' className="bg-white rounded-lg border-solid border-grey-border border p-4 flex flex-row gap-2 items-center justify-start shrink-0 w-full relative" /> 
                </div>
                <div className="w-full flex flex-col gap-[9px] items-start justify-start shrink-0 relative">
                    <div className="text-grey-900 text-left font-small-text-font-family text-small-text-font-size leading-small-text-line-height font-small-text-font-weight relative">
                        Instagram
                    </div>
                    <input type='text' name='instagram' value={instagram} onChange={handleInputChange} placeholder='Instagram' className="bg-white rounded-lg border-solid border-grey-border border p-4 flex flex-row gap-2 items-center justify-start shrink-0 w-full relative" /> 
                </div>
            </div>
        </div>
        <div className='mb-10 mx-auto'>
            <button type='submit' className="bg-grey-900 rounded-lg pt-1 lg:pt-3 pr-2 lg:pr-6 pb-1 lg:pb-3 pl-2 lg:pl-6 flex flex-row gap-1.5 items-center justify-center w-[40%] lg:w-[20%] mt-6 mb-6 mx-auto lg:mx-0">
                <div className="text-white text-left font-button-text-font-family text-button-text-font-size leading-button-text-line-height font-button-text-font-weight relative">
                Save Image
                </div>
            </button>
        </div>
    </form>

    </>
  )
}

export default ProfileMain