import React from 'react'
export default ({ birthDate }) => <span>{Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10)}</span>