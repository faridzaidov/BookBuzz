'use client'

import {useMutation} from '@tanstack/react-query'
import {useRouter} from 'next/navigation'
import {SubmitHandler, useForm} from 'react-hook-form'
import {toast} from 'sonner'
import './style.scss'

import {IAuthForm} from '@/types/auth.types'
import {authService} from "@/services/auth.service";
import {PAGES} from "@/config/pages-url.config";
import {Field} from "@/components/ui/fields/Field";
import {Button} from "@/components/ui/buttons/Button";


export function Auth() {
    const {register, handleSubmit, reset} = useForm<IAuthForm>({
        mode: 'onSubmit'
    })


    const {push} = useRouter()

    const {mutate} = useMutation({
        mutationKey: ['auth'],
        mutationFn: (data: IAuthForm) =>
            authService.login(data),
        onSuccess() {
            toast.success('Successfully login!')
            reset()
            push(PAGES.HOME)
        }
    })

    const onSubmit: SubmitHandler<IAuthForm> = data => {
        mutate(data)
    }

    return (
        <div className="login-container">
            <div className="login-left">
                <h1>BookBuzz</h1>
                <img src="/images/reading.png" alt="Reading"/>
            </div>
            <div className="login-right">
                <h2>Log In</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Field
                        id='email'
                        label='Email:'
                        placeholder='Enter email:'
                        type='email'
                        extra='mb-4'
                        {...register('email', {
                            required: 'Email is required!'
                        })}

                    />
                    <Field
                        id='password'
                        label='Password: '
                        placeholder='Enter password: '
                        type='password'
                        {...register('password', {
                            required: 'Password is required!'
                        })}
                        extra='mb-6'
                    />
                    <button type="submit">Log In</button>
                </form>
            </div>
        </div>


    )
}
