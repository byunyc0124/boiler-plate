import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from '../_actions/user_action';

export default function(SpecificComponent, option, adminRoute = null){

    // option
    // null => 아무나 출입이 가능한 페이지
    // true => 로그인한 유저만 출입이 가능한 페이지
    // false => 로그인한 유저는 출입 불가능한 페이지

    function AuthenticationCheck(){
        const dispatch = useDispatch();

        useEffect(() => {
            dispatch(auth()).then(response => {

            })
        }, [])

        return(
            <SpecificComponent />
        )
    }

    return AuthenticationCheck
}