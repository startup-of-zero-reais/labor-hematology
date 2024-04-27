import {
	Button,
	Input,
	Label,
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	CardFooter,
} from '@labor/ui'
import Link from 'next/link'
import React from 'react'

export default function Page() {
	return (
		<div className="flex flex-col justify-center items-center min-h-screen">
			<Card className="w-full max-w-screen-sm shadow-stone-400 shadow-md">
				<CardHeader>
					<CardTitle>Registre-se</CardTitle>
					<CardDescription>
						Registre-se e acesse o sistema
					</CardDescription>
				</CardHeader>

				<CardContent className="flex flex-col gap-4 max-w-screen-sm w-full">
					<div className="flex flex-col gap-2">
						<Label htmlFor="input1">Nome</Label>
						<Input id="input1" placeholder="Insira seu nome" />
					</div>

					<div className="flex flex-col gap-2">
						<Label htmlFor="input1">E-mail</Label>
						<Input id="input1" placeholder="Insira seu e-mail" />
					</div>

					<div className="flex flex-col gap-2">
						<Label htmlFor="input2">Senha</Label>
						<Input
							id="input2"
							type="password"
							placeholder="Insira sua senha"
						/>
					</div>

					<div className="flex flex-col gap-2">
						<Label htmlFor="input2">Confirmação de Senha</Label>
						<Input
							id="input2"
							type="password"
							placeholder="Insira sua confirmação de senha"
						/>
					</div>
					<Button>Cadastrar</Button>
				</CardContent>

				<CardFooter>
					<Link
						href="/login"
						className="text-primary hover:underline"
					>
						Já possui conta? Acesse
					</Link>
				</CardFooter>
			</Card>
		</div>
	)
}
