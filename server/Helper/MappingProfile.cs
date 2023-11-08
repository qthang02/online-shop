using AutoMapper;
using DTOs;
using Models;

namespace Helper
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<LoginDto, User>();

            CreateMap<RegisterDto, User>().ForMember(
                des => des.PasswordHash, act => act.MapFrom(src => src.Password)
            );
        }
    }
}