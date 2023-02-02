import React from 'react';

        const styles = {
            h1: {
                color: '#00A6FB',
                fontFamily: '',
                padding: '50px',
                textAlign: 'center',
            },
            height: {
              height: '100vh',
              display: 'flex',
              justifyContent: 'center',
              textAlign: 'center'
            },
            container: {
                position: 'absolute',
                padding: '10px',
                top: '25%',
                left: '25%',
                display: 'flex',
                border: '5px solid #00A6FB)',
                boxShadow: '5px 10px 10px #00A6FB',
                height: '50%',
                background: '#051923'
            },
            content: {
            },
            img: {
              width: '50%'
            },
            p: {
              color: '#00A6FB',
            }
        };
        
        export default function About() {
          return (
            <main>
            <div style={styles.height}>
              <div className="container" style={styles.container}>
                <div style={styles.content}>
                <h1 className='font-link' style={styles.h1}>About Us</h1>
                <p style={styles.p}>
                  This site is a startup! Originally made for educational purposes. The team constists of three Full Stack Web Developers looking to find a place in the world. If you like the site, be sure to checkout the developers down below!
                </p>
                </div>
                </div>
            </div>
            </main>
          );
        };