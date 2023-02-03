import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import ProfilePageMain from '../components/Profile/Profile'

const styles = {
    height: {
        height: '100vh',
        padding: '2px'
      },
};

export default function ProfilePage() {
    return (
        <div style={styles.height}>
            <ProfilePageMain />
        </div>
    );
}