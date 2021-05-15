import { useEffect, useState } from "react";
import { Redirect, Route } from "react-router";

function PrivateRoute({ children, ...rest }) {


    const [user, setUser] = useState({});

    useEffect(() => {
        const user = JSON.parse(sessionStorage.getItem('user'));
        setUser(user)
    }, [])

    return (
        <Route
            {...rest}
            render={({ location }) =>
                user ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}
export default PrivateRoute;