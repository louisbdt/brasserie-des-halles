import Button from './Button'

export default {
  title: 'Composants/Button',
  component: Button,
}

export const Primary = {
  args: { variant: 'primary', children: 'Réserver une table' },
}

export const Secondary = {
  args: { variant: 'secondary', children: 'Voir le détail' },
}

export const Disabled = {
  args: { variant: 'primary', disabled: true, children: 'Confirmer la réservation' },
}

export const LongLabel = {
  args: {
    variant: 'primary',
    children: 'Envoyer la demande de devis pour la privatisation de la salle',
  },
}

export const Focus = {
  args: { variant: 'primary', children: 'Réserver une table' },
  play: async ({ canvasElement }) => {
    canvasElement.querySelector('button')?.focus()
  },
}
