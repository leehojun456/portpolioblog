import prisma from '$lib/prisma';

export async function POST({ request }) {
  const { name, email, password } = await request.json();
  
  const userData = {
    name: name || null,
    email: email || null,
    password: password || null,
  };

  try {
    const user = await prisma.user.create({
      data: userData
    });
    return new Response(JSON.stringify(user), { status: 201 });
  } catch (error) {
    console.error(error);
    return new Response('사용자 생성 중 오류가 발생했습니다.', { status: 500 });
  }
}
