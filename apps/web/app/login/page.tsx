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
					<CardTitle>Acesse sua conta</CardTitle>
					<CardDescription>
						Você pode acessar sua conta a partir de aqui
					</CardDescription>
				</CardHeader>

				<CardContent className="flex flex-col gap-4 max-w-screen-sm w-full">
					<div className="flex flex-col gap-2">
						<Label htmlFor="input1">E-mail</Label>
						<Input id="input1" placeholder="Fala dele professor" />
					</div>

					<div className="flex flex-col gap-2">
						<Label htmlFor="input2">Senha</Label>
						<Input
							id="input2"
							type="password"
							placeholder="Fala dele professor"
						/>
					</div>

					<Button>Acessar</Button>
				</CardContent>

				<CardFooter>
					<Link
						href="/register"
						className="text-primary hover:underline"
					>
						Não possui uma conta? Cadastre-se
					</Link>
				</CardFooter>
			</Card>
		</div>
	)
}
