import React, { useEffect, useState } from 'react'
import getPosition from '../../../functions/getPosition'
import getWeather from '../../../functions/getWeather'
import { GlobalContextType } from '../../common/types/globalContext'
import Input from '../../components/Input'
import Today from '../../components/Today'
import OtherDays from '../../components/OtherDays'
import {
  AppContainerMask,
  AppContainerWallpaper,
  AppContainerWrapper,
  AppContainerError,
  AppContainerTransition,
} from './AppContainer.style'

export const AppContainer: React.FC = () => {
  const [nameInput, setNameInput] = useState('')
  const [globalContext, setGlobalContext] = useState({} as GlobalContextType)

  const handleClick = () => {
    getWeather(nameInput)

    setTimeout(() => {
      setGlobalContext(window.dataContext)
    }, 2000)
  }

  const handleChange = (event: any) => {
    setNameInput(event.target.value)
  }

  useEffect(() => {
    getPosition()
    setTimeout(() => {
      if (window.dataContext?.info?.name) {
        setNameInput(window.dataContext?.info?.name)
      }
      setGlobalContext(window.dataContext)
    }, 2000)
  }, [])

  return (
    <AppContainerWallpaper>
      <AppContainerMask>
        <AppContainerWrapper>
          <Input nameInput={nameInput} handleClick={handleClick} handleChange={handleChange} />
          <AppContainerTransition key={globalContext.info?.id}>
            {globalContext && globalContext.weatherPerDay && window.error === false ? (
              <>
                <Today contextToday={globalContext.weatherPerDay[0]} />
                <OtherDays day={1} contextOtherDays={globalContext.weatherPerDay[1]} />
                <OtherDays day={2} contextOtherDays={globalContext.weatherPerDay[2]} />
              </>
            ) : (
              window.error === undefined && <AppContainerError> Loading ...</AppContainerError>
            )}
            {window.error === true && <AppContainerError>Ops! ): Não encontramos essa cidade</AppContainerError>}
          </AppContainerTransition>
        </AppContainerWrapper>
      </AppContainerMask>
    </AppContainerWallpaper>
  )
}

export default AppContainer
