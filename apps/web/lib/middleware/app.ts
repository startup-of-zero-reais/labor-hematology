import { NextRequest, NextResponse } from 'next/server'
import { parse } from './utils'
import { supabaseMiddleware } from '@/lib/supabase/middleware'

export default async function AppMiddleware(request: NextRequest) {
	console.log('Is AppMiddleware')

	const { path } = parse(request)

	const supabase = await supabaseMiddleware(request)

	const {
		data: { user },
		error,
	} = await supabase.auth.getUser()

	if (path.startsWith('/dashboard') && (!user || error)) {
		if (error) {
			return NextResponse.redirect(
				new URL(`/?error=${error.message}`, request.url),
			)
		}

		return NextResponse.redirect(new URL('/', request.url))
	}

	if (['/', '/register'].includes(path) && !!user) {
		const url = new URL('/dashboard', request.url)
		return NextResponse.redirect(url)
	}

	return NextResponse.next()
}
