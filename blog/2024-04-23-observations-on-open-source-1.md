---
layout: post
title: Observations
---

## WRF - Weather Research & Forecasting

Fortran and Roff. Roff is for typesetting and markup.

`wrf.F` - seems to contain stuff on starting up the model and other executive tasks

Developed at National Center for Atmospheric Research

`frame/` - fortran code like `module_alloc_space_<N>.F` or `nl_set_<N>_routines.F`.
Has code like `dummy; make needs this to be happy`

`phys/` contains the actual physics code

`WRF/phys/module_bl_boulac.F` - heat and moisture turbulent fluxes follwing the approach of Bougeault and Lacarrere

They have a kind of `!` exclamation notation for comments as well as `call` for invoking routines

```fortran
! solve diffusion equation for momentum x component
call diff(kms,kme,kts,kte,1,1,dt,u1D,rho1D,rhoz1D,exch1D,a_u1D,b_u1D,sf1D,vl1D,dz1D,wu1D)
```

main entry point

```fortran
subroutine boulac(frc_urb2d,idiff,flag_bep,dz8w,dt,u_phy,v_phy   &  ...)
```

`frc_urb2d` --> fraction cover urban. No idea what that means, apparently Fractional coverage of urban areas in the grid cells.

Quite a lot of parameters for a subroutine. Seems a bit like overcomplex design to me.

ims, ime, jms, jme, kms, kme: Start and end indices for the memory allocation in the x, y, and z directions.
Its interesting that they have to manually manage this stuff.

wu, wv: Turbulent fluxes of momentum in the x and y directions.
