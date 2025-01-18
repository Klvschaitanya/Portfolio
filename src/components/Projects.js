import React from 'react'

const Projects = () => {
    return (
        <div>
            <h1 style={{ color: 'Highlight', textAlign: 'center' }}>Personal Projects</h1>

            <div className='projectsList'>
                <div style={{ margin: '50px', border: '1px solid white', padding: '20px', borderRadius: '15px' }}>
                    <div style={{ display: 'flex', flexDirection: 'row',justifyContent:'space-between' }}>
                    <h3 style={{ color: 'darkkhaki' }}>Food Delivery Application</h3>
                    <div>
                            <a href='https://github.com/Klvschaitanya/FOOD-DELIVERY'><img src='https://media.licdn.com/dms/image/v2/C560BAQFmuLSyL1nlPA/company-logo_200_200/company-logo_200_200/0/1678231359043/github_logo?e=2147483647&v=beta&t=2RO1zjla4T-YiOqKS50e4sc9n8RAgnUqGqu0mcZp5fU' alt='gitHub' height={40} style={{ borderRadius: '10px' }} /></a>
                        </div>
                    </div>
                    <br/>
                    <p style={{ color: 'white' }}>A full-stack food delivery application that allows users to browse menus, place orders, and manage account information. This project showcases end-to-end development skills with a focus on real-world functionality and smooth user experience</p>
                    <ul>
                        <li style={{ color: 'white' }}><b>User Authentication</b>: Secure login and registration system.</li>
                        <li style={{ color: 'white' }}><b>Dynamic Menu</b>: Displays items from a MongoDB collection ('food_Details') with options like portion sizes and prices.</li>
                        <li style={{ color: 'white' }}><b>Responsive UI</b>: Optimized for all devices using Bootstrap.</li>
                        <li style={{ color: 'white' }}><b>State Management</b>: Efficient data flow with React and Redux.</li>
                    </ul>

                </div>

                <div style={{ margin: '50px', border: '1px solid white', padding: '20px', borderRadius: '15px' }}>
                    <div style={{ display: 'flex', flexDirection: 'row',justifyContent:'space-between' }}>
                        <h3 style={{ color: 'darkkhaki', }}>E-Grama Panchayat </h3>
                        <div>
                            <a href='https://github.com/Klvschaitanya/E-Grama-Panchayat'><img src='https://media.licdn.com/dms/image/v2/C560BAQFmuLSyL1nlPA/company-logo_200_200/company-logo_200_200/0/1678231359043/github_logo?e=2147483647&v=beta&t=2RO1zjla4T-YiOqKS50e4sc9n8RAgnUqGqu0mcZp5fU' alt='gitHub' height={40} style={{ borderRadius: '10px' }} /></a>
                        </div>
                    </div>  <br/>
                    <p style={{ color: 'white' }}>A basic web application designed to replicate an e-governance portal for a Grama Panchayat, providing a foundational platform for rural service management. This project showcases the layout and structure required for delivering essential services digitally, serving as a practice for building user-centered web applications.</p>
                    <ul>
                        <li style={{ color: 'white' }}><b>Service Listings</b>: Displays a list of essential public services, providing users with basic information about each service.</li>
                        <li style={{ color: 'white' }}><b>Announcements Section</b>Announcements Section: A mock-up for sharing community updates and news.</li>
                        <li style={{ color: 'white' }}><b>User Authentication</b>: Basic login functionality to allow secure access for registered users.</li>
                    </ul>

                </div>

                <div style={{ margin: '50px', border: '1px solid white', padding: '20px', borderRadius: '15px' }}>
                  <div style={{ display: 'flex', flexDirection: 'row',justifyContent:'space-between' }} >
                  <h3 style={{ color: 'darkkhaki' }}> Task Manager  </h3>
                  <div>
                            <a href='https://github.com/Klvschaitanya/Taskmanager'><img src='https://media.licdn.com/dms/image/v2/C560BAQFmuLSyL1nlPA/company-logo_200_200/company-logo_200_200/0/1678231359043/github_logo?e=2147483647&v=beta&t=2RO1zjla4T-YiOqKS50e4sc9n8RAgnUqGqu0mcZp5fU' alt='gitHub' height={40} style={{ borderRadius: '10px' }} /></a>
                        </div>
                  </div>  <br/>
                    <p style={{ color: 'white' }}>Developed a full-stack Task Manager Application to manage tasks effectively, 
enabling users to create, update, and delete tasks. The application provides a user-friendly 
interface with a responsive design and seamless interaction.</p>
                    <ul>
                        <li style={{ color: 'white' }}><b>Task Management </b>:Add, edit, and delete tasks seamlessly, enabling users to stay organized and productive.</li>
                        <li style={{ color: 'white' }}><b>Real-Time Updates</b>:Reflects changes instantly as users add or modify tasks, providing a responsive and interactive experience.

</li>
                        <li style={{ color: 'white' }}><b>Responsive Design</b>:Adapts to various screen sizes, ensuring usability on both mobile and desktop devices.</li>

                    </ul>

                </div>





            </div>
        </div>
    )
}

export default Projects
