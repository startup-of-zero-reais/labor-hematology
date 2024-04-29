'use client'

import { createClient } from '@/lib/supabase/client'
import { Button } from '@labor/ui'

interface LogoutButtonProps {}

export const LogoutButton = ({}: LogoutButtonProps) => {
	const signOut = async () => {
		const supabase = createClient()
		await supabase.auth.signOut()
		window.location.replace('/login')
	}

	return (
		<Button variant="destructive" onClick={signOut}>
			Sair
		</Button>
	)
}
