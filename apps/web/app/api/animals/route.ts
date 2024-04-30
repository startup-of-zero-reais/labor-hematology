import prisma from '@/lib/prisma'
import { handleAndReturnErrorResponse } from '@/lib/api/errors'
import { getPagination, getSearchParams, handlePaginate } from '@labor/utils'
import { animalSchema } from './schema'

export async function POST(request: Request) {
	try {
		const body = await request.json()

		const animal = animalSchema.parse(body)

		const result = await prisma.animal.create({
			data: animal,
			select: {
				id: true,
			},
		})
		return Response.json(result, { status: 201 })
	} catch (error) {
		return handleAndReturnErrorResponse(error)
	}
}

export async function GET(request: Request) {
	try {
		const pagination = getPagination(request.url)
		const params = getSearchParams(request.url)

		const [animals, count] = await prisma.$transaction([
			prisma.animal.findMany({
				take: pagination.limit,
				skip: pagination.offset,
				where: {
					name: {
						contains: params.name,
					},
					trackingMark: {
						contains: params.trackingMark,
					},
				},
				orderBy: {
					updatedAt: 'desc',
				},
			}),
			prisma.animal.count(),
		])

		return Response.json({
			content: animals,
			pagination: handlePaginate(request.url, count),
		})
	} catch (error) {
		return handleAndReturnErrorResponse(error)
	}
}
