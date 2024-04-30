import prisma from '@/lib/prisma'
import { LaborApiError, handleAndReturnErrorResponse } from '@/lib/api/errors'
import { animalSchema } from '../schema'

export async function GET(
	request: Request,
	{ params }: { params: { id: string } },
) {
	const { id } = params
	try {
		const animal = await prisma.animal.findFirst({
			where: {
				id,
			},
		})
		if (!animal)
			throw new LaborApiError({
				code: 'not_found',
				message: 'animal not found',
			})
		return Response.json(animal)
	} catch (error) {
		return handleAndReturnErrorResponse(error)
	}
}

export async function PUT(
	request: Request,
	{ params }: { params: { id: string } },
) {
	try {
		const body = await request.json()
		const animal = animalSchema.partial().parse(body)
		const { id } = params

		const result = await prisma.animal.update({
			where: { id },
			data: animal,
		})

		return Response.json(result)
	} catch (error) {
		return handleAndReturnErrorResponse(error)
	}
}

export async function DELETE(
	request: Request,
	{ params }: { params: { id: string } },
) {
	try {
		const { id } = params

		await prisma.animal.update({
			where: { id },
			data: { deletedAt: new Date() },
		})
		return Response.json({ id })
	} catch (error) {
		return handleAndReturnErrorResponse(error)
	}
}
