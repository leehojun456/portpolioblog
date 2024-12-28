import { redirect } from '@sveltejs/kit';
import prisma from '$lib/prisma';

export async function load() {
  // User 테이블에서 사용자 정보가 있는지 확인
  const users = await prisma.user.findMany();

  // 사용자 정보가 없으면 설정 페이지로 리다이렉트
  if (users.length === 0) {
    throw redirect(303, '/setup'); // 303: 리소스가 다른 URI로 이동됨
  }

  // 사용자 정보가 있으면 데이터 반환
  return {
    users
  };
}
