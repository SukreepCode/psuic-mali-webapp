import React, { useEffect, useState } from 'react';
import * as Auth from '../services/auth';
import { useSelector, useDispatch, connect } from "react-redux";
import { Link as RouterLink, withRouter } from 'react-router-dom';

import { LOGIN_PATH } from '../pages/Routes'
import store from "../app/store";

const dispatch = store.dispatch;

const ValidatingToken = (props: any) => {
  const { history } = props;
  const auth: Auth.AuthType = useSelector(Auth.selector);
  const dispatch = useDispatch();

  const [nextRoute, setNextRoute] = useState("");

  useEffect(() => {
    dispatch(Auth.checkAuthentication());
    const searchParams = new URLSearchParams(window.location.search);
    console.log(searchParams.has("next"));

    if (props.nextRoute) {
      setNextRoute(props.nextRoute);
      console.log(`Next route by props: ${props.nextRoute}`);
    } else if (searchParams.has("next")) {
      setNextRoute(searchParams.get("next") as string);
      console.log(`Next route by search params: ${searchParams.get("next")}`);
    } else if (props.location.state?.nextRoute) {
      setNextRoute(props.location.state.nextRoute);
    } else {
      setNextRoute(LOGIN_PATH);
    }

    navigateToNextRoute();

  }, []);

  useEffect(() => {
    navigateToNextRoute();
  }, [auth]);

  const navigateToNextRoute = () => {
    if (auth.isAuthenticated && nextRoute !== "") {
      console.log(`Routing to ${nextRoute}`);
      history.push(nextRoute);
    }
    console.log(`ValidatingToken ${auth.isAuthenticated}`);
  }

  return (
    <div>
    </div>
  );
}

export default withRouter(ValidatingToken);

// type MyProps = {
//   // using `interface` is also ok
//   nextRoute: string;
//   auth: any;
// };

// type MyState = {
//   count: number; // like this
// };

// class ValidatingToken extends React.Component<MyProps, MyState> {
//   state: MyState = {
//     count: 0,
//   };

//   async componentWillMount() {
//     // add event listeners (Flux Store, WebSocket, document, etc.)
//     console.log("Will Mounted");
//     await dispatch(Auth.checkAuthentication());
//     console.log(`ValidatingToken ${auth.isAuthenticated}`);
//     // location.href = this.props.nextRoute;
//   }

//   componentDidMount() {
//     // React.getDOMNode()
//     console.log("Mounted");

//   }

//   componentWillUnmount() {
//     // remove event listeners (Flux Store, WebSocket, document, etc.) {this.state.count}
//   }
//   render() {
//     return (
//       <div>
//         {this.props.nextRoute}
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state: any) => ({
//   auth: state.auth
// });

// export default connect(mapStateToProps)(ValidatingToken);