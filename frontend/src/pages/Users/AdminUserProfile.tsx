import React, { useEffect, useState } from 'react'
import defaultUser from '../../assets/face-icon-user.png'
import AdminHeader from '../../components/Header/AdminHeader'
import EditAdminProfileModal from '../../components/Modal/EditAdminProfileModal'
import { User } from '../../types/user'
import './UserProfile.css'

const emptyUser: User = {
  _id: '',
  firstName: '',
  lastName: '',
  gender: '',
  phoneNumber: '',
  department: '',
  rank: '',
  interestAreas: '',
  photoUrl: '',
  email: '',
  verified: 0,
}

const AdminUserProfile: React.FC = () => {
  const [user, setUser] = useState<User>(emptyUser)
  const [selectedUser, setSelectedUser] = useState<User | null>(null)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('token')
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/users/admin/profile/${
            JSON.parse(localStorage.getItem('user') ?? '{}').id
          }`,
          {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )

        if (response.ok) {
          const data = await response.json()
          setUser(data.user)
        } else {
          setUser(emptyUser)
        }
      } catch (error) {
        console.error(error)
        setUser(emptyUser)
      }
    }

    fetchUser()
  }, [])

  const handleUserClick = (user: User) => {
    setSelectedUser(user)
  }

  const handleCloseModal = () => {
    setSelectedUser(null)
  }

  return (
    <div>
      <AdminHeader />
      <div className='container mt-1'>
        <h2 style={{ color: '#923D41' }}>
          <span className='fa fa-user'></span> Profile Info
        </h2>
        <div className='row'>
          <div
            className='col-sm-12 border rounded table-responsive-sm'
            style={{ backgroundColor: '#DCDCDC' }}
          >
            <br />
            <table className='table table-sm table-borderless table-responsive'>
              <tbody className='user-profile-tbody'>
                <tr>
                  <td rowSpan={6}>
                    <img
                      src={user.photoUrl || defaultUser}
                      alt='User profile'
                      style={{
                        width: '200px',
                        borderRadius: '50%',
                      }}
                    />
                  </td>
                  <td className='text-nowrap'>
                    <span className='fas fa-user'></span>
                    <strong> First Name: </strong>
                  </td>
                  <td className='text-nowrap'>
                    <i> {user.firstName} </i>
                  </td>
                  <td className='text-nowrap'>
                    <span className='fas fa-user'></span>
                    <strong> Last Name: </strong>
                  </td>
                  <td className='text-nowrap'>
                    <i> {user.lastName} </i>
                  </td>
                </tr>
                <tr>
                  <td className='text-nowrap'>
                    <span className='fas fa-address-card'></span>
                    <strong> ID: </strong>
                  </td>
                  <td className='text-nowrap'>
                    <i> {user._id} </i>
                  </td>
                  <td className='text-nowrap'>
                    <span className='fas fa-envelope'></span>
                    <strong> Email: </strong>
                  </td>
                  <td className='text-nowrap'>
                    <i> {user.email} </i>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className='text-center'>
          <br />
          <button
            className='btn btn-secondary mb-3 mb-md-0'
            data-toggle='modal'
            data-target='#editaUser'
            onClick={() => handleUserClick(user)}
          >
            <span className='fas fa-upload'></span> Edit Profile
          </button>
          &nbsp;
          <button
            className='btn btn-secondary mb-3 mb-md-0'
            onClick={() => alert('Feature Not Yet Available')}
          >
            <span className='fas fa-camera'></span> Change Profile Picture
          </button>
        </div>
        {selectedUser && (
          <EditAdminProfileModal
            selectedUser={selectedUser}
            onClose={handleCloseModal}
          />
        )}
      </div>
    </div>
  )
}

export default AdminUserProfile
