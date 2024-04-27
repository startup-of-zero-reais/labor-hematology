import { type NextRequest } from 'next/server'
import { parse } from './lib/middleware/utils'
import { APP_HOSTNAMES } from '@labor/utils'
import AppMiddleware from './lib/middleware/app'

export async function middleware(request: NextRequest) {
	const { domain } = parse(request)

	if (APP_HOSTNAMES.has(domain)) return AppMiddleware(request)
}

export const config = {
	matcher: [
		/*
		 * Match all paths except for:
		 * 1. /api/ routes
		 * 2. /_next/ (Next.js internals)
		 * 3. /_proxy/ (special page for OG tags proxying)
		 * 4. /_static (inside /public)
		 * 5. /_vercel (Vercel internals)
		 * 6. Static files (e.g. /favicon.ico, /sitemap.xml, /robots.txt, etc.)
		 */
		'/((?!api/|_next/|_proxy/|_static|_vercel|[\\w-]+\\.\\w+).*)',
	],
}
