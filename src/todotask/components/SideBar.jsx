import { Link, Typography } from "@mui/material"
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { nanoid } from 'nanoid'

export const SideBar = () => {
    const [categories, setCategories] = useState([])

    const { category } = useSelector(state => state.todotask)

    useEffect(() => {
      setCategories([...categories, category])
    }, [category])

    const handleLink = () => {
        setCategorySelected('All')
    }


    return (
        <>
            <Link href="#" underline="none" onClick={handleLink}>
                <Typography variant="h4" sx={{color: '#EA5959'}}>
                    <strong>All</strong>
                </Typography>
            </Link>
            {
                categories.map(category => {
                    const uid = nanoid()
                    return (
                        <Link href="#" underline="none" key={uid}>
                            <Typography variant="h4" sx={{color: '#EA5959'}}>
                                <strong>{category}</strong>
                            </Typography>
                        </Link>
                    )
                })
                
            }
        </>
  )
}
